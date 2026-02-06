# User List Assignment (Frontend + Backend)

This repository contains:

- `frontend/` → React app (Vite) that consumes `https://dummyjson.com/users` and provides local add/delete/search/refresh.
- `backend/` → Node.js (Express) API that serves users from MySQL (mimicking required fields).

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
cp .env.example .env
# configure .env
mysql -u root -p < db/schema.sql
mysql -u root -p < db/seed.sql
npm run dev
```

## Submission

- Share the repository link (preferred)
- Or zip the repository and email it

The MySQL sample data is provided in `backend/db/schema.sql` and `backend/db/seed.sql`.
<img width="1918" height="1025" alt="image" src="https://github.com/user-attachments/assets/573486de-e667-41bb-a19a-2ffdffefce55" />

<img width="1915" height="1026" alt="image" src="https://github.com/user-attachments/assets/e46a0351-3e16-426f-a90d-762d70e63e03" />

