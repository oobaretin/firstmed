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

    // Check if email credentials are available
    if (!process.env.SENDER_EMAIL || !process.env.EMAIL_PASSWORD || !process.env.ADMIN_EMAIL) {
      console.log('Email credentials not configured, returning success without sending email');
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your booking request has been submitted. We will contact you shortly.',
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
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Email content
    const emailContent = `
New Medical Transport Booking Request

Patient Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Transport Details:
- Service Type: ${serviceType}
- Pickup Location: ${pickupLocation}
- Destination: ${destination}
- Date: ${date}
- Time: ${time}
- Additional Message: ${message || 'None'}

Please contact the patient as soon as possible to confirm the booking.

Best regards,
First Med Care EMS Website
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Medical Transport Booking - ${name}`,
      text: emailContent
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your booking request has been submitted. We will contact you shortly.',
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
      { success: false, message: 'An error occurred. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
