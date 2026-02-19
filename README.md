# Jlabstest API

Node.js/Express/MongoDB API for Jlabstest application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):
```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/jlabstest
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

3. Run the User Seeder:
```bash
npm run seed
```

Seeded users:
- Email: `admin@example.com`, Password: `password123`
- Email: `user@example.com`, Password: `user123456`

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### POST /api/login
Login with email and password.

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "...",
      "email": "admin@example.com"
    },
    "token": "jwt-token"
  }
}
```

## Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
