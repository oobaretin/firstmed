import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Test booking request received:', body);
    
    // Simple validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required.' },
        { status: 400 }
      );
    }
    
    // Return success without any complex operations
    return NextResponse.json({
      success: true,
      message: 'Test booking successful!',
      receivedData: body
    });
    
  } catch (error) {
    console.error('Test booking error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Test failed: ' + (error instanceof Error ? error.message : 'Unknown error')
      },
      { status: 500 }
    );
  }
}
