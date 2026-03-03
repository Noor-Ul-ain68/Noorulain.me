import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log('Received body:', body);
        const { name, email, message } = body;

        console.log('EMAIL_USER check:', process.env.EMAIL_USER ? `Present (${process.env.EMAIL_USER.substring(0, 4)}...)` : 'MISSING');
        console.log('EMAIL_PASS check:', process.env.EMAIL_PASS ? 'Present (Hidden)' : 'MISSING');

        // Verify environment variables are present
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Environment variables EMAIL_USER or EMAIL_PASS are missing.');
            return NextResponse.json(
                { success: false, message: 'Server configuration error: Missing environment variables in terminal environment.' },
                { status: 500 }
            );
        }

        console.log('Using EMAIL_USER:', process.env.EMAIL_USER);

        // Create transporter using Gmail SMTP
        // Recommended for Gmail: use host/port instead of "service" for more control
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Test the connection
        try {
            await transporter.verify();
            console.log('SMTP connection verified successfully.');
        } catch (verifyError: unknown) {
            const error = verifyError as Error;
            console.error('SMTP Verification Error:', error);
            return NextResponse.json(
                { success: false, message: `SMTP connection failed: ${error.message}` },
                { status: 500 }
            );
        }

        // Email content configuration
        const mailOptions = {
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px; padding: 24px;">
                    <h2 style="color: #FF6A00; margin-bottom: 24px; border-bottom: 1px solid #eee; padding-bottom: 12px;">New Contact Form Submission</h2>
                    
                    <div style="margin-bottom: 16px;">
                        <span style="font-weight: bold; color: #666;">Name:</span>
                        <p style="margin: 4px 0; color: #333;">${name}</p>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <span style="font-weight: bold; color: #666;">Email:</span>
                        <p style="margin: 4px 0; color: #333;">${email}</p>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <span style="font-weight: bold; color: #666;">Message:</span>
                        <p style="margin: 4px 0; color: #333; line-height: 1.6;">${message}</p>
                    </div>
                </div>
            `,
        };

        // Send email to admin
        const info = await transporter.sendMail(mailOptions);
        console.log('Admin email sent info:', info.messageId);

        // Send confirmation email to the user
        const userMailOptions = {
            from: `"Noor ul Ain" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thank you for reaching out – Noor ul Ain`,
            html: `
                <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px; padding: 32px; color: #333; line-height: 1.6;">
                    <div style="margin-bottom: 24px;">
                        <h2 style="color: #FF6A00; margin: 0; font-size: 24px;">Message Received</h2>
                    </div>
                    
                    <p style="font-size: 16px; margin-bottom: 16px;">Hi ${name},</p>
                    
                    <p style="font-size: 16px; margin-bottom: 16px;">Thank you for reaching out. I’ve received your message and will get back to you within 24 hours.</p>
                    
                    <p style="font-size: 16px; margin-bottom: 24px;">If your matter is urgent, feel free to book a strategy call through my website.</p>
                    
                    <div style="border-top: 1px solid #eee; padding-top: 24px; margin-top: 24px;">
                        <p style="font-size: 16px; margin: 0;">Best regards,</p>
                        <p style="font-size: 18px; font-weight: bold; margin: 4px 0 0 0; color: #FF6A00;">Noor ul Ain</p>
                        <p style="font-size: 14px; margin: 0; color: #666;">AI Automation Strategist</p>
                    </div>
                </div>
            `,
        };

        const userInfo = await transporter.sendMail(userMailOptions);
        console.log('User confirmation email sent info:', userInfo.messageId);

        return NextResponse.json(
            { success: true, message: 'Emails sent successfully' },
            { status: 200 }
        );
    } catch (err: unknown) {
        const error = err as Error;
        console.error('Full Nodemailer error:', error);
        return NextResponse.json(
            { success: false, message: `Error sending email: ${error.message}` },
            { status: 500 }
        );
    }
}
