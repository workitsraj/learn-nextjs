# Learn Next.js

A basic Next.js application with App Router to learn Next.js fundamentals. This project demonstrates:

- ✅ Health check API route
- ✅ Backend API with hardcoded data (no database needed)
- ✅ Frontend that fetches and displays data from the backend
- ✅ Modern UI with responsive design

## Features

### API Routes

1. **Health Check** (`/api/health`)
   - Returns application health status
   - Returns: `{ status: 'ok', timestamp: ISO_DATE, message: 'Health check passed' }`

2. **Data API** (`/api/data`)
   - Returns hardcoded user data
   - No database required
   - Returns: Array of user objects with id, name, email, and role

### Frontend

- Displays team members in a responsive card grid
- Shows health check status
- Client-side data fetching with loading states
- Modern, gradient background with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm package manager

### Installation

```bash
# Install dependencies
npm install
```

### Running the Application

```bash
# Development mode
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
# Create production build
npm run build

# Run production server
npm start
```

## Project Structure

```
learn-nextjs/
├── app/
│   ├── api/
│   │   ├── health/
│   │   │   └── route.ts       # Health check endpoint
│   │   └── data/
│   │       └── route.ts       # Data API endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page (client component)
│   └── page.module.css        # Page-specific styles
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies
└── tsconfig.json              # TypeScript configuration
```

## API Endpoints

### GET /api/health

Returns the health status of the application.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-02-10T17:03:52.333Z",
  "message": "Health check passed"
}
```

### GET /api/data

Returns hardcoded user data.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "Developer"
    }
  ],
  "count": 3,
  "message": "Data fetched successfully"
}
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 19** - UI library
- **CSS Modules** - Scoped styling

## Learning Points

This project is perfect for MERN stack developers learning Next.js:

1. **App Router** - Next.js 13+ routing system (different from Pages Router)
2. **API Routes** - Backend endpoints within Next.js
3. **Client Components** - Using 'use client' directive for interactive components
4. **Server-Side Capabilities** - Next.js can handle both frontend and backend
5. **TypeScript Integration** - Type safety across the stack

## Next Steps

To extend this application, you could:

- Add more API endpoints
- Integrate a real database (MongoDB, PostgreSQL, etc.)
- Add authentication and authorization
- Implement CRUD operations
- Add form handling and validation
- Deploy to Vercel or AWS

## License

MIT
