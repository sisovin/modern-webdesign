# Modern Web Design Project

## Project Overview

**Modern Web Design** is a comprehensive full-stack project designed to showcase best practices in both frontend (Next.js, TypeScript) and backend (Django, Django REST Framework). This repository serves as a boilerplate for building highly responsive, accessible, and maintainable web applications, featuring modular architecture, RESTful API integration, and a strong focus on developer experience.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Setup - Frontend](#setup---frontend)
- [Setup - Backend](#setup---backend)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [About the Author](#about-the-author)
- [Key Tips & Development Prompts](#key-tips--development-prompts)

---

## Setup - Frontend

The frontend uses **Next.js** with **TypeScript** for type safety, **Styled Components** for CSS-in-JS, and is structured for scalability.

### Prerequisites

- Node.js (>= 18.x)
- npm (>= 9.x) or yarn (>= 1.22.x)

### Installation

```bash
cd frontend
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```
Frontend will be available at [http://localhost:3000](http://localhost:3000).

### Technical Constraints

- All components must be written in TypeScript.  
- Use TypeScript interfaces for props, state, and API responses.
- Ensure responsive design using CSS Grid/Flexbox.
- Adhere to accessibility (a11y) standards (e.g., ARIA roles, keyboard navigation).
- Add error boundaries and comprehensive error handling in UI components.
- Organize code by feature; use `/components`, `/hooks`, `/utils`, `/pages` directories.
- Optimize images and assets for performance.
- Use ESLint and Prettier for code style enforcement.

### Additional Tips

- Always request TypeScript interfaces when dealing with API data.
- Ask for responsive design and accessibility considerations for new components.
- Request code organization suggestions for complex features.
- For performance, request before/after benchmarks when optimizing.

---

## Setup - Backend

The backend is built with **Django** and **Django REST Framework** for API development and business logic.

### Prerequisites

- Python (>= 3.10)
- pip (>= 21.x)
- PostgreSQL (recommended for production)

### Installation

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Running Migrations & Development Server

```bash
python manage.py migrate
python manage.py runserver
```
Backend API will be available at [http://localhost:8000](http://localhost:8000).

### Technical Constraints

- Use Django REST Framework for all APIs.
- Separate apps by domain (e.g., `users`, `api`, `core`).
- Apply proper error handling and custom exception middleware.
- Write unit tests for all endpoints (use `pytest` or Django’s test runner).
- Use environment variables for secrets and configuration.
- Enforce code formatting with `black` and linting with `flake8`.

### Additional Tips

- Always ask for best practices verification against Django conventions.
- Request comprehensive API documentation with usage examples.
- Ensure performance optimizations (e.g., query optimization, caching).
- Include accessibility and validation for API input/output.

---

## Contribution Guidelines

We welcome contributions! Please:

1. Fork this repo and create your feature branch (`git checkout -b feature/AmazingFeature`).
2. Ensure all code is documented and covered by tests.
3. Run linter and formatter before submitting a PR.
4. For complex components:
   - Break the task into smaller sub-tasks and implement/test each before composing.
5. For bug reports:
   - Analyze the error and provide a step-by-step troubleshooting guide with proposed solutions.
6. For features:
   - Request TypeScript interfaces and highlight responsive, accessibility, and error handling requirements.
   - Document usage examples and edge cases in your PR.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## About the Author

**Author:** [sisovin](https://github.com/sisovin)

Passionate about modern web technologies, scalable architecture, and developer experience. Always striving for simplicity, performance, and best practices in both frontend and backend development.

---

## Key Tips & Development Prompts

Use these prompts to ensure high-quality contributions, effective debugging, and best practices adherence:

### 1. For Complex Components

> **Prompt:**  
> "Break this component into smaller sub-tasks and generate each part separately before composition"

### 2. When Debugging

> **Prompt:**  
> "Analyze this error and provide step-by-step troubleshooting guide with potential solutions"

### 3. For Optimization

> **Prompt:**  
> "Review this code and suggest performance improvements with before/after benchmarks"

### 4. For Best Practices

> **Prompt:**  
> "Verify this implementation against Next.js/Django best practices and highlight any gaps"

### 5. For Testing

> **Prompt:**  
> "Generate unit test cases for this component covering all functionality and edge cases"

### 6. For Documentation

> **Prompt:**  
> "Create comprehensive developer documentation for this feature including usage examples"

---

### Always Remember

- **Be specific** about requirements and constraints.
- **Request TypeScript interfaces** for all data structures.
- **Ask for responsive design** and **accessibility** in UI features.
- **Demand error handling** for all user and API interactions.
- **Require performance optimizations** and code organization suggestions on all PRs.
