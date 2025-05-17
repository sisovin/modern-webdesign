from django.urls import path
from .views import contact_form_handler

urlpatterns = [
    path('contact/', contact_form_handler, name='contact_form_handler'),
]
