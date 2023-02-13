from django.urls import path, include
from app_api import views as ApiViews

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'data/custom', ApiViews.CustonCalcView, basename='custon_calc_api')
router.register(r'data/amazon', ApiViews.AmazonCalcView, basename='amazon_calc_api')
router.register(r'data/ebay', ApiViews.EbayCalcView, basename='ebay_calc_api')

app_name = "app_api"

urlpatterns = [
    path("user/details/", ApiViews.UserDetialsViews.as_view(), name="user_detials_api"),
    path("custom/preset/", ApiViews.CustomCalcPresetView.as_view(), name="get_preset"),
    # path("data/amazon/", ApiViews.AmazonCalcView.as_view(), name="amazon_calc_api"),
    # path("data/ebay/", ApiViews.EbayCalcView.as_view(), name="ebay_calc_api"),
    # path("data/custom/", ApiViews.CustonCalcView.as_view({'get': 'list'}), name="custon_calc_api"),
    path('', include(router.urls)),
]