import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        // Parse the form data from the request
        const formData = await request.json()

        // Send email to the form submitter
        const submitterEmail = await resend.emails.send({
            from: 'no-reply@medicbuilds.com',
            to: formData.email,
            subject: 'Thank You for Contacting MedicBuilds',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank You for Reaching Out!</h2>
          <p>Hi ${formData.name},</p>
          <p>We've received your message about ${formData.subject || 'your dental website project'}. Our team will review your inquiry and get back to you within 24 hours.</p>
          <p>Best regards,<br>MedicBuilds Team</p>
        </div>
      `
        })

        // Send email to admin with full form details
        const adminEmail = await resend.emails.send({
            from: 'no-reply@medicbuilds.com',
            to: process.env.ADMIN_EMAIL || 'admin@medicbuilds.com',
            subject: 'New Contact Form Submission',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${formData.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Clinic Name:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${formData.clinicName || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Subject:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${formData.subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Services:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${formData.services.join(', ') || 'None selected'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Budget:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${formData.budget}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Preferred Contact:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${formData.preferredContact}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Timeframe:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${formData.timeframe}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Message:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${formData.message}</td>
            </tr>
          </table>
        </div>
      `
        })

        return NextResponse.json({
            success: true,
            submitterEmailStatus: submitterEmail,
            adminEmailStatus: adminEmail
        }, { status: 200 })
    } catch (error) {
        console.error('Email sending error:', error)
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 })
    }
}