from django.urls import path
from .views import DestinationListCreateView, DestinationRetrieveUpdateDestroyView

urlpatterns = [
    path('', DestinationListCreateView.as_view(), name='destination-list-create'),
    path('<int:pk>/', DestinationRetrieveUpdateDestroyView.as_view(), name='destination-detail'),
]
