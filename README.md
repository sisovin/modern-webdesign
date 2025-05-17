# Modern Web Design

This repository contains a modern web design project with a Next.js frontend and a Django backend.

## Repository Structure

```
├── apps/
│   ├── frontend/                 # Next.js 15 (App Router with TypeScript strict mode)
│   │   ├── app/
│   │   │   ├── (main)/           # Marketing site
│   │   │   │   ├── layout.tsx    # MainLayout component
│   │   │   │   ├── page.tsx      # Home
│   │   ├── components/           # Reusable components
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx    # Sticky nav
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── BackToTop.tsx
│   │   ├── tailwind.config.ts
│   │   ├── postcss.config.mjs
│   │   ├── next.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   └── backend/                 # Django backend
│       ├── core/
│       │   ├── __init__.py
│       │   ├── admin.py
│       │   ├── apps.py
│       │   ├── models.py        # DB models
│       │   ├── serializers.py   # API serializers
│       │   ├── views.py         # API views
│       │   ├── urls.py          # API routes
│       │   └── migrations/
│       ├── manage.py
│       ├── requirements.txt
│       ├── .env
│       └── start.sh
├── .gitignore
├── package.json                 # Root package
├── pnpm-workspace.yaml
└── README.md
```

## Setup Instructions

### Frontend

1. Navigate to the `apps/frontend` directory:
   ```sh
   cd apps/frontend
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Run the development server:
   ```sh
   pnpm dev
   ```

### Backend

1. Navigate to the `apps/backend` directory:
   ```sh
   cd apps/backend
   ```

2. Create a virtual environment:
   ```sh
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```sh
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```sh
     source venv/bin/activate
     ```

4. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```

5. Run the development server:
   ```sh
   ./start.sh
   ```

## Contributing

We welcome contributions to this project. Please follow the guidelines below:

1. Fork the repository and create a new branch for your feature or bugfix.
2. Make your changes and ensure that the code passes all tests.
3. Submit a pull request with a clear description of your changes.

Thank you for contributing!
