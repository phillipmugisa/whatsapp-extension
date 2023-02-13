from django.urls import path
from manager import views as ManagerViews

app_name = "manager"

urlpatterns = [
    path("", ManagerViews.HomePageView.as_view(), name="home"),
    path("saved/", ManagerViews.SavedDataView.as_view(), name="saved"),
    path("serverpage/", ManagerViews.ServerPageView.as_view(), name="serverpage"),
    path("bridge/", ManagerViews.BridgePageView.as_view(), name="bridge"),
    path("pricings/", ManagerViews.PricingView.as_view(), name="pricings"),
    path("account/", ManagerViews.AccountView.as_view(), name="account"),
]