from rest_framework import serializers
from app_auth import models as AuthModels
from manager import models as ManagerModels
from payments import models as PaymentModels

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthModels.User
        fields = ['id', 'username', 'email']

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('context').get('request').user
        super().__init__(*args, **kwargs)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["subscription"] = PaymentModels.PaypalSubscription.objects.filter(user=instance).first().plan.name
        return representation


class CustomCalcSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagerModels.CustomCalc
        fields = "__all__"


class AmazonCalcSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagerModels.AmazonCalc
        fields = "__all__"

class EbayCalcSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagerModels.EbayCalc
        fields = "__all__"