from django.http import JsonResponse, Http404
from django.core import serializers
from .models import Company, Vacancy
from django.shortcuts import get_object_or_404

def list_companies(request):
    companies = Company.objects.all()
    companies_json = serializers.serialize('json', companies)
    return JsonResponse(companies_json, safe=False)

def get_company(request, id):
    try:
        company = get_object_or_404(Company, id=id)
        company_json = serializers.serialize('json', [company])
        return JsonResponse(company_json, safe=False)
    except Http404:
        return JsonResponse({'error': 'Company not found'}, status=404)

def get_vacancy(request, id):
    try:
        vacancy = get_object_or_404(Vacancy, id=id)
        vacancy_json = serializers.serialize('json', [vacancy])
        return JsonResponse(vacancy_json, safe=False)
    except Http404:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)

def list_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = serializers.serialize('json', vacancies)
    return JsonResponse(vacancies_json, safe=False)


def list_vacancies_by_company(request, id):
    try:
        company = get_object_or_404(Company, id=id)
        vacancies = Vacancy.objects.filter(company=company)
        vacancies_json = serializers.serialize('json', vacancies)
        return JsonResponse(vacancies_json, safe=False)
    except Http404:
        return JsonResponse({'error': 'Company not found'}, status=404)

def list_top_ten_vacancies(request):
    top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]
    top_ten_vacancies_json = serializers.serialize('json', top_ten_vacancies)
    return JsonResponse(top_ten_vacancies_json, safe=False)
