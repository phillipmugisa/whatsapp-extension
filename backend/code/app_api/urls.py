from django.urls import path, include
from app_api import views as ApiViews

from rest_framework.routers import DefaultRouter

app_name = "app_api"

urlpatterns = [
    path("user/details/", ApiViews.UserDetialsViews.as_view(), name="user_detials_api"),
    path("data/templates/", ApiViews.TemplateListCreateView.as_view(), name="templates"),
]