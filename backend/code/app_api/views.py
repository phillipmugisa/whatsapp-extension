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

        user_id = request.user.id
        user = AuthModels.User.objects.filter(id=user_id).first()
        
        response = {
            # "email" : user.email,
            "subscription" : PaymentModels.PaypalSubscription.objects.filter(user=user).first().plan.name
        }   

        return Response(response)

class AmazonCalcView(viewsets.ModelViewSet):
    queryset = ManagerModels.AmazonCalc.objects.all()
    serializer_class = serializers.AmazonCalcSerializer

    @action(detail=False, methods=['post'])
    def create_and_retrieve(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data)

class EbayCalcView(viewsets.ModelViewSet):
    queryset = ManagerModels.EbayCalc.objects.all()
    serializer_class = serializers.EbayCalcSerializer

    @action(detail=False, methods=['post'])
    def create_and_retrieve(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data)

class CustonCalcView(viewsets.ModelViewSet):
    queryset = ManagerModels.CustomCalc.objects.all()
    serializer_class = serializers.CustomCalcSerializer

    @action(detail=False, methods=['post'])
    def create_and_retrieve(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data)


class CustomCalcPresetView(generics.ListAPIView):
    queryset = ManagerModels.CustomCalc.objects.filter(preset=True)[:1]
    serializer_class = serializers.CustomCalcSerializer
    permission_classes = [permissions.IsAuthenticated]