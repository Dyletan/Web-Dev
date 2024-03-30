from django.contrib import admin
from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('products/', get_products),
    re_path(r'^products/(\d+)/$', get_product_by_id),
    path('categories/', get_categories),
    re_path(r'^categories/(\d+)/$', get_category_by_id),
    re_path(r'^categories/(\d+)/products/$', get_products_by_category),
]