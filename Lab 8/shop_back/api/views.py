from django.http import JsonResponse, HttpResponse
from django.core import serializers
from .models import Product, Category

def get_categories(request):
    categories = Category.objects.all()
    categories_json = serializers.serialize('json', categories)
    return JsonResponse(categories_json, safe=False)

def get_category_by_id(request, id):
    category = Category.objects.get(id=id)
    category_json = serializers.serialize('json', [category])
    return JsonResponse(category_json, safe=False)

def get_products(request):
    products = Product.objects.all()
    products_json = serializers.serialize('json', products)
    return JsonResponse(products_json, safe=False)

def get_product_by_id(request, id):
    product = Product.objects.get(id=id)
    product_json = serializers.serialize('json', [product])
    return JsonResponse(product_json, safe=False)

def get_products_by_category(request, id):
    category = Category.objects.get(id=id)
    products = Product.objects.filter(category=category)
    products_json = serializers.serialize('json', products)
    return JsonResponse(products_json, safe=False)
