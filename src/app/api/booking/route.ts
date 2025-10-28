import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password'
      }
    });

    // Email content
    const emailContent = `
Dear ${name},

Thank you for choosing First Med Care EMS for your medical transport needs.

Booking Details:
- Service Type: ${serviceType}
- Pickup Location: ${pickupLocation}
- Destination: ${destination}
- Date: ${date}
- Time: ${time}
- Phone: ${phone}
- Message: ${message || 'None'}

We will contact you shortly to confirm your booking and provide further details.

For immediate assistance, please call us at (555) 123-4567.

Best regards,
First Med Care EMS Team
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL || 'your-email@gmail.com',
      to: email,
      subject: 'Booking Confirmation - First Med Care EMS',
      text: emailContent
    });

    // Also send notification to business email
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL || 'your-email@gmail.com',
      to: process.env.SENDER_EMAIL || 'your-email@gmail.com',
      subject: 'New Booking Request - First Med Care EMS',
      text: `
New booking request received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${serviceType}
Pickup: ${pickupLocation}
Destination: ${destination}
Date: ${date}
Time: ${time}
Message: ${message || 'None'}

Please contact the customer to confirm the booking.
      `
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your booking request has been submitted. We will contact you shortly.'
    });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
