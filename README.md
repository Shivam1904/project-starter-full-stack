# StarterApp (Django + React)

A strict, scalable monolithic application featuring a **Django REST Framework** backend and a **React + TypeScript + Vite** frontend.

This project follows a "Starter Pack" architecture with enforced rules for code quality, strict typing, and separation of concerns.

## 🏗 Project Layout

```bash
/starter-app
├── backend/               # Django + DRF
│   ├── .venv/             # Isolated Python Environment
│   ├── config/            # Settings (Base, Dev, Prod)
│   ├── core/              # Shared Utils (Responses, Exceptions)
│   └── api/               # API Layer (Transport only)
├── frontend/              # React + Vite
│   ├── src/
│   │   ├── api/           # Axios Client & Endpoints
│   │   ├── components/    # Common UI (shadcn/ui)
│   │   ├── features/      # Domain Features (Auth, etc.)
│   │   └── hooks/         # Global Hooks
└── .agent/rules/          # Engineering Rules
```

---

## 🛠 Tech Stack (Feb 2026 Latest Stable)

| Component | Technology | Version | Management |
| :--- | :--- | :--- | :--- |
| **Language** | Python | `3.11.x`* | `brew install python@3.11` or [python.org](https://www.python.org/downloads/) |
| **Framework** | Django | `5.2.11` (LTS) | `requirements.txt` |
| **Runtime** | Node.js | `v24` (LTS)* | `nvm` or [nodejs.org](https://nodejs.org/) |
| **Frontend** | React | `18.3.1` | `package.json` |
| **Build Tool** | Vite | `7.3.1` | `package.json` |
| **Quality** | Pre-commit | `latest` | `backend/requirements.txt` |
| **Scoreboard** | Pylint | `10.00/10` | `.pylintrc` |

*\* Note: Python 3.10+ and Node.js 18+ should also work if 3.11/v24 are unavailable.*

---

## 🔐 Database & Admin Access

Although the main application has authentication removed for simplicity, the **Django Admin Panel** remains available for database management.

### 1. Create a Superuser
To access the admin panel, you need a superuser account. For local development, we recommend:
- **Username**: `root`
- **Password**: `root`
- **Email**: `root@example.com`

```bash
cd backend
python manage.py createsuperuser
```
Follow the prompts, or use the recommended credentials above.

### 2. Access the Admin Panel
1. Start the backend: `python manage.py runserver`
2. Open [http://localhost:8000/admin/](http://localhost:8000/admin/)
3. Log in with the superuser credentials you just created.

---

Now, simply `cd backend` will activate your virtual environment.

---

## ⚡ Quick Start (First Time Setup)

### 1. Environment Sync

**Using nvm & Python 3.11:**
```bash
# Frontend
cd frontend
nvm install && nvm use

# Backend
cd ../backend
python3.11 -m venv .venv
source .venv/bin/activate
```

**Alternative (No nvm or Python 3.11):**
- **Node.js**: Download and install the latest LTS from [nodejs.org](https://nodejs.org/). Verify with `node -v`.
- **Python**: Install Python 3.10+ from [python.org](https://www.python.org/downloads/). Use `python3 -m venv .venv` instead if `python3.11` is not found.

### 2. Configuration & Deps
```bash
# Backend
cp .env.example .env
pip install -r requirements.txt
pre-commit install --hook-type pre-push  # Set up quality gates
python manage.py migrate

# Frontend
cd ../frontend
npm install
```

### 3. Execution
```bash
# Terminal 1: Backend
cd backend && python manage.py runserver

# Terminal 2: Frontend
cd frontend && npm run dev
```

---

---

## 🐍 Backend (Django)

The backend provides a strictly typed JSON API using Django REST Framework.

### Key Features
- **Strict API Contract**: All responses follow a unified `{ success, message, data, meta }` envelope.
- **Simplified Access**: Authentication is disabled by default for this starter app.
- **App Architecture**:
    - **`apps/`**: Domain Logic, Models, Migrations (e.g., `profiles`).
    - **`api/`**: Transport Logic, Serializers, Views, URLs.
    - **`core/`**: Shared Utils (Responses, Exceptions).
    - **Rule**: Every new model MUST be registered in `admin.py` immediately.

### Configuration (`backend/config/settings/`)
- `base.py`: Shared settings.
- `development.py`: Active by default (`DEBUG=True`), CORS allow localhost:5173.
- `production.py`: For deployment.

**Environment Variables**:
- `SECRET_KEY`: Django secret key.
- `DEBUG`: Set to `True` for development.

### Running the Backend

1. **Active Environment**:
   Ensure Python 3.11 is active:
   ```bash
   cd backend
   # If not using direnv:
   source .venv/bin/activate
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Initialize Database**:
   ```bash
   # Run migrations for all apps
   python manage.py makemigrations
   python manage.py migrate

   # For specific apps (e.g., profiles)
   # python manage.py makemigrations profiles
   ```

3. **Start Server**:
   ```bash
   python manage.py runserver
   # Runs on http://localhost:8000
   ```

### Code Quality (Push Hooks)
This project enforces a **10.00/10 quality gate** via `pre-push` hooks. Checks run automatically when you push code, but not during local commits.
- **Linter (Python)**: `pylint $(find . -name "*.py")`
- **Formatter**: `black .`
- **Imports**: `isort .`
- **Linter (JS/TS)**: `npm run lint`

---

## 🔍 Debugging & Profiling

This project includes powerful tools to help you identify performance bottlenecks and runtime issues.

### Backend (Django Silk)
- **What it does**: Intercepts and records all HTTP requests and database queries.
- **Access**: Visit [http://localhost:8000/silk/](http://localhost:8000/silk/) while the backend is running.
- **Usage**: Use this to find N+1 queries, slow database calls, and timing issues.

### Frontend (React Query Devtools & React Scan)
- **React Query Devtools**: Provides visibility into the server state, caching, and fetch status.
    - **Access**: A small floating icon appears in the bottom right of the app in development.
- **React Scan**: Highlights parts of the UI that are re-rendering.
    - **How to use**: Watch for flashing outlines on components. If a component flashes when it shouldn't, consider optimizing with `useMemo` or `React.memo`.

---

## ⚛️ Frontend (React)

The frontend is a modern SPA built with performance and developer experience in mind.

### Tech Stack
- **Framework**: Vite + React 18.3.1 (Latest)
- **Language**: TypeScript (Strict)
- **Styling**: TailwindCSS
- **Runtime**: Node.js v24 (Managed via `.nvmrc`)
- **UI Component Library**: shadcn/ui + Radix Primitives
- **State Management**: React Query (Server state), Context (Global Auth)
- **Routing**: React Router DOM

### Architecture
- **`src/lib/`**: Shared utilities (e.g., `utils.ts` for Shadcn's `cn` logic).
- **`src/features/`**: Domain logic. E.g., `features/auth` contains:
  - `AuthContext.tsx`: Global authentication state provider.
  - `api.ts`: API calls for that feature.
  - `pages/`: Route components (SignIn, SignUp, Profile).
- **`src/components/ui/`**: Reusable Shadcn/UI components built on Radix Primitives.

### Running the Frontend

1. **Active Environment**:
   Ensure Node v24 is active:
   ```bash
   cd frontend
   nvm use
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   # Runs on http://localhost:5173
   ```
   *Note: Vite is configured to Proxy `/api` requests to `http://localhost:8000` automatically.*

3. **Production Build**:
   ```bash
   npm run build
   # Outputs to /dist folder
   ```

4. **Code Quality**:
   - **Auto-Fix (All)**: `npm run lint:fix && npm run format`
   - **Linter**: `npm run lint`
   - **Formatter**: `npm run format`

---

---

- **Quality Gates**: Enforced via `pre-push` hooks (ESLint, Black, Pylint 10/10).
- **TypeScript**: Strict mode enabled with exhaustive type checking.
- **Rules**: Comprehensive AI-assisted rules in `.agent/rules/rules.md`.
- **Commits**: Conventional commits (feat, fix, style, docs) are preferred.
