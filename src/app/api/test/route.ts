import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      message: 'API is working',
      environment: {
        SENDER_EMAIL: process.env.SENDER_EMAIL ? 'Set' : 'Not set',
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? 'Set' : 'Not set',
        ADMIN_EMAIL: process.env.ADMIN_EMAIL ? 'Set' : 'Not set',
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
