from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from app_auth import models as AuthModels
from app_api import serializers
from manager import models as ManagerModels
from payments import models as PaymentModels


# class UserDetialsViews(generics.RetrieveAPIView):
#     serializer_class = serializers.UserSerializer
#     queryset = AuthModels.User.objects.all()
#     permission_classes = [permissions.IsAuthenticated]

class UserDetialsViews(APIView):
    def get(self, request, *args, **kwargs):
        response = dict()
        
        response = {
            # "email" : user.email,
            "subscription" : PaymentModels.PaypalSubscription.objects.filter(user=request.user).first().plan.name,
            "user" : request.user.username,
        }   

        return Response(response)

class TemplateListCreateView(generics.ListCreateAPIView):
    serializer_class = serializers.TemplateSerializer
    queryset = ManagerModels.Templates.objects.all()

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)