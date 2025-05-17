from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/destinations/', include('destinations.urls')),
    path('api/bookings/', include('bookings.urls')),
    path('api/blog/', include('blog.urls')),
    path('api/contact/', include('contact.urls')),
]
