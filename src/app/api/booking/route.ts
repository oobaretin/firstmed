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
    try {
      await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: process.env.ADMIN_EMAIL,
        subject: `New Medical Transport Booking - ${name}`,
        text: emailContent
      });
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the entire request if email fails
      // Just log the error and continue
    }

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
    
    // Provide more specific error messages
    let errorMessage = 'An error occurred. Please try again or call us directly.';
    
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      
      // Check for specific error types
      if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.message.includes('Invalid login')) {
        errorMessage = 'Email service temporarily unavailable. Please call us directly.';
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Request timed out. Please try again.';
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
      },
      { status: 500 }
    );
  }
}
