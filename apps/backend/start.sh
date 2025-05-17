#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

# Apply database migrations
python manage.py migrate

# Start the Django development server
python manage.py runserver
