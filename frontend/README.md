# Frontend (React)

A simple React app that consumes `https://dummyjson.com/users` and displays a list of users.

## Features

- Display users: **Name**, **Company name**, **Role**, **Country**
- **Refresh** button to fetch the list again
- **Search** box to filter by name, company, role, or country
- **Add user** (`+`) adds a static user to local state (no API call)
- **Delete** removes a user from the UI (local state only)

> Note: Refresh re-fetches API users while keeping locally added users and locally deleted IDs.

## Tech Stack

- React (Vite)
- Chakra UI
- Axios

## Setup

```bash
cd frontend
npm install
npm run dev
```

Open: http://localhost:5173

## Build

```bash
npm run build
npm run preview
```
