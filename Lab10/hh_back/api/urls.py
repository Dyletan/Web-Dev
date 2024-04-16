from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', list_companies),
    path('companies/<int:id>/', get_company),
    path('companies/<int:id>/vacancies/', list_vacancies_by_company),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', GenericVacancyDetail.as_view()),
    path('vacancies/top_ten/', VacancyTopTenAPIView.as_view())
]