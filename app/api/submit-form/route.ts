import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the form data
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    // Get all selected project types
    const projectTypes: string[] = [];
    formData.getAll('projectType').forEach((type) => {
      projectTypes.push(type as string);
    });
    
    // Create a transporter with hardcoded credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info@parkpatchandpaint.ca',
        pass: 'jqrh esrn qagq ahtb', // App password
      },
    });
    
    // Email content
    const mailOptions = {
      from: 'info@parkpatchandpaint.ca',
      to: 'info@parkpatchandpaint.ca', // Updated email address
      subject: `New Quote Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Project Types: ${projectTypes.join(', ') || 'None selected'}
        
        Additional Details:
        ${message || 'No additional details provided'}
      `,
      html: `
        <h2>New Quote Request from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        
        <p><strong>Project Types:</strong> ${projectTypes.join(', ') || 'None selected'}</p>
        
        <h3>Additional Details:</h3>
        <p>${message || 'No additional details provided'}</p>
      `,
    };
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Your quote request has been submitted. We will contact you within 48 hours.' 
    });
    
  } catch (error) {
    console.error('Error submitting form:', error);
    
    // Return error response
    return NextResponse.json(
      { success: false, message: 'There was an error submitting your request. Please try again.' },
      { status: 500 }
    );
  }
} 