from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('companies/', list_companies),
    re_path(r'^companies/(\d+)/$', get_company),
    re_path(r'^companies/(\d+)/vacancies/$', list_vacancies_by_company),
    path('vacancies/', list_vacancies),
    re_path(r'^vacancies/(\d+)/$', get_vacancy),
    path('vacancies/top_ten/', list_top_ten_vacancies)
]