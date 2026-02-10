import { NextResponse } from 'next/server';

// Hardcoded data to send to the frontend
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Developer'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Designer'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Product Manager'
  }
];

export async function GET() {
  // Simulate backend processing delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return NextResponse.json({
    success: true,
    data: users,
    count: users.length,
    message: 'Data fetched successfully'
  });
}
