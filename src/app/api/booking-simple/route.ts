import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, pickupLocation, destination, date, time, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !pickupLocation || !destination || !date || !time) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // For now, just return success without sending email
    return NextResponse.json({
      success: true,
      message: 'Booking request received! We will contact you shortly.',
      bookingData: {
        name,
        email,
        phone,
        serviceType,
        pickupLocation,
        destination,
        date,
        time,
        message: message || 'None'
      }
    });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
