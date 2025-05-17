@echo off
REM Load environment variables from .env file
if exist .env (
    for /f "tokens=*" %%i in (.env) do set %%i
)

REM Apply database migrations
python manage.py migrate

REM Start the Django development server
python manage.py runserver
