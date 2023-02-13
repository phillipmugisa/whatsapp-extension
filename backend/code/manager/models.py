from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify
import datetime

# Create your models here.
class Calc(models.Model):
    class Meta:
        ordering = ['-id']

    created_on = models.DateField(_("Created on"), default=datetime.date.today)


class CustomCalc(Calc):
    Profit = models.CharField(_("Profit"), max_length=256)
    item_cost_price = models.CharField(_("item_cost_price"), max_length=256)
    shipping_charge = models.CharField(_("shipping_charge"), max_length=256)
    shipping_cost = models.CharField(_("shipping_cost"), max_length=256)
    sales_tax = models.CharField(_("sales_tax"), max_length=256)
    selling_cost_percent = models.CharField(_("selling_cost_percent"), max_length=256)
    fixed_platform_fee = models.CharField(_("fixed_platform_fee"), max_length=256)
    transaction_cost_percent = models.CharField(_("transaction_cost_percent"), max_length=256)
    fixed_transaction_cost = models.CharField(_("fixed_transaction_cost"), max_length=256)
    revenue = models.CharField(_("revenue"), max_length=256)
    Gross_Profit_Margin = models.CharField(_("Gross_Profit_Margin"), max_length=256)
    sellingPrice = models.CharField(_("sellingPrice"), max_length=256)
    Markup = models.CharField(_("Markup"), max_length=256)
    selling_cost = models.CharField(_("selling_cost"), max_length=256, default="0")
    total_cost = models.CharField(_("total_cost"), max_length=256, default="0")
    preset = models.BooleanField(_("preset"), default=False)

class EbayCalc(Calc):
    item_sold_price = models.CharField(_("item_sold_price"), max_length=256)
    item_cost_price = models.CharField(_("item_cost_price"), max_length=256)
    ebay_fee = models.CharField(_("ebay_fee"), max_length=256)
    shipping_charge = models.CharField(_("shipping_charge"), max_length=256)
    shipping_cost = models.CharField(_("shipping_cost"), max_length=256)
    promotion = models.CharField(_("promotion"), max_length=256)
    other_fees = models.CharField(_("other_fees"), max_length=256)
    category = models.CharField(_("category"), max_length=256)
    ebay_store = models.CharField(_("ebay_store"), max_length=256)
    seller_status = models.CharField(_("seller_status"), max_length=256)
    computedTotalCost = models.CharField(_("computedTotalCost"), max_length=256)
    computedTotalProfit = models.CharField(_("computedTotalProfit"), max_length=256)
    computedTotalProfitPercent = models.CharField(_("computedTotalProfitPercent"), max_length=256)

class AmazonCalc(Calc):
    desired_return_value = models.CharField(_("desired_return_value"), max_length=256)
    item_sold_price = models.CharField(_("item_sold_price"), max_length=256)
    shipping_weight = models.CharField(_("shipping_weight"), max_length=256)
    shipping_credit = models.CharField(_("shipping_credit"), max_length=256)
    item_cost = models.CharField(_("item_cost"), max_length=256)
    shipping_cost = models.CharField(_("shipping_cost"), max_length=256)
    miscellaneous_cost = models.CharField(_("miscellaneous_cost"), max_length=256)
    shipping_method = models.CharField(_("shipping_method"), max_length=256)
    computedCategoryFee = models.CharField(_("computedCategoryFee"), max_length=256)
    totalAmazonCost = models.CharField(_("totalAmazonCost"), max_length=256)
    total_cost = models.CharField(_("total_cost"), max_length=256)
    actual_profit = models.CharField(_("actual_profit"), max_length=256)
    computedProfitMargin = models.CharField(_("computedProfitMargin"), max_length=256)
    sellAtPrice = models.CharField(_("sellAtPrice"), max_length=256)