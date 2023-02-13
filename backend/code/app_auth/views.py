from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from django.contrib import auth
from app_auth.models import User
from django.http import HttpResponse

from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib import messages
from app_auth import tasks as AuthTasks
import random

class ExtensionTasksViews(View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:

            # if a user is authenticated, this view is for process of the extension to get the user logged in
            refresh = RefreshToken.for_user(request.user)
            # create cookies
            response = redirect(reverse("manager:home"))
            response.set_cookie('refresh', str(refresh))
            response.set_cookie('access', str(refresh.access_token))
            response.delete_cookie('user_logged_out')
            return response
        return redirect(reverse("app_auth:login"))
        
            

class loginUserView(View):
    template_name = "account/login.html"

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect(reverse("manager:home"))
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        email = request.POST.get("email", "")
        password = request.POST.get("password", "")
        user = auth.authenticate(email=email, password=password)

        if user is not None:
            if not user.is_phone_activated and not user.is_email_activated:
                messages.add_message(request, messages.ERROR, 'Verify Phone Number or Email to Proceed')
                return redirect(reverse("app_auth:login"))

            auth.login(request, user)
            return redirect(reverse("app_auth:extension_tasks"))
            
        messages.add_message(request, messages.ERROR, 'Account Not Found.')
        return redirect(reverse("app_auth:login"))

class RegisterUserView(View):
    template_name = "account/register.html"

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect(reverse('manager:home'))
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        email = request.POST.get("email", "")
        country_code = request.POST.get("country_code", "")
        phone_number = request.POST.get("mobile_user", "")
        password = request.POST.get("password", "")
        confirm_password = request.POST.get("confirm_password", "")

        if password == confirm_password:
            if not User.objects.filter(email=email):

                verify_code = "".join([ str(i) for i in random.sample([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6)])

                user = User.objects.create_user(
                    email=email,
                    password=password,
                    country_code=country_code,
                    phone_number=phone_number,
                    verify_code = verify_code,
                    is_active = False
                )

                if user:
                    # send confirmation email
                    AuthTasks.send_confirmation_code_and_email.delay(user.pk, user.verify_code)
                    messages.add_message(request, messages.SUCCESS, 'A confirmation code has been sent to your phone number.')

                    response = redirect(reverse("app_auth:verify_number"))
                    response.set_cookie("user_verify_id", value=user.pk)
                    return response

                    
                messages.add_message(request, messages.ERROR, 'An Error Occured. Try Again.')
                return redirect(reverse("app_auth:register"))
            else:
                messages.add_message(request, messages.ERROR, 'Email not available.')
                return redirect(reverse("app_auth:register"))
        else:
                messages.add_message(request, messages.ERROR, 'Passwords entered do not match.')
                return redirect(reverse("app_auth:register"))

        return render(request, self.template_name)


def logout(request):
    auth.logout(request)
    messages.add_message(request, messages.SUCCESS, 'User Logged out')
    response = redirect(reverse("app_auth:login"))
    response.delete_cookie('refresh')
    response.delete_cookie('access')
    response.set_cookie('user_logged_out', True)
    return response


class VerifyNumberView(View):
    template_name = "account/confirm_number.html"

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect(reverse("manager:home"))
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        verify_code = request.POST.get("verify_code")
        if verify_code and request.COOKIES.get("user_verify_id", None):
            user_pk = int(request.COOKIES.get("user_verify_id", None))
            user = User.objects.filter(pk=user_pk, verify_code=verify_code).first()
            if user is not None:
                user.is_phone_activated = True
                is_active = True
                user.save()
                messages.add_message(request, messages.SUCCESS, 'Phone Number verified. Login to continue.')
                return redirect(reverse("app_auth:login"))
            messages.add_message(request, messages.ERROR, 'Account not found.')
            return redirect(reverse("app_auth:login"))
        messages.add_message(request, messages.ERROR, 'Account Not Found.')
        return redirect(reverse("app_auth:login"))
