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

import os
import openai
import re

openai.api_key = os.environ.get("OPENAIKEY")


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


class AIView(APIView):
    def get(self, request, user_message, reply_tone):
        response = dict()
        
        response = openai.Completion.create(
                model="text-davinci-003",
                prompt=f"suggest 3 replies to this message: {user_message}. {reply_tone}",
                max_tokens=80,
        )

        replies = re.split(r'\d+\.', response.choices[0].text.replace('\n', ''))

        replies = [ reply.strip() for reply in replies if reply.strip()]
        
        response = {
            "replies" : replies
        }   

        return Response(response)