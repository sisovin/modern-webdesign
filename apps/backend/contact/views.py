from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ContactMessage
from .serializers import ContactMessageSerializer

@api_view(['POST'])
def contact_form_handler(request):
    if request.method == 'POST':
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
