# Backend (Node.js + MySQL)

A simple Node.js API that serves a mock user list from a MySQL database.

## Endpoint

- `GET /users` → returns a list of users from MySQL (mimics the subset of dummyjson user shape used by the frontend).

Example response:

```json
{
  "users": [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "company": { "name": "...", "title": "Product Manager" },
      "address": { "country": "United States" }
    }
  ],
  "total": 10,
  "skip": 0,
  "limit": 10
}
```

## Setup

### 1) Install dependencies

```bash
cd backend
npm install
```

### 2) Configure environment variables

Create `.env` from `.env.example`:

```bash
cp .env.example .env
# edit values
```

### 3) Create schema & seed data

Run these SQL files in your MySQL client:

```sql
source db/schema.sql;
source db/seed.sql;
```

Or from terminal:

```bash
mysql -u root -p < db/schema.sql
mysql -u root -p < db/seed.sql
```

### 4) Start the server

```bash
npm run dev
# or
npm start
```

Server will run at: `http://localhost:4000`

### Health check

- `GET /health` (checks DB connectivity)

## Notes on Best Practices

- Uses environment variables (`dotenv`) for DB credentials
- Uses MySQL connection pool (`mysql2/promise`)
- Uses parameterized queries (prevents SQL injection)
- Returns safe error messages (no internal details in production)
