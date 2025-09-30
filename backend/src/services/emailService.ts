import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendApprovalNotification(
    userEmail: string,
    userName: string,
    requestType: string,
    status: 'Approved' | 'Declined',
    reviewNotes?: string
  ) {
    const subject = `Your ${requestType} Request has been ${status}`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">RideShare SA - Approval Update</h2>
        <p>Hello ${userName},</p>
        <p>Your ${requestType} request has been <strong style="color: ${status === 'Approved' ? 'green' : 'red'}">${status}</strong>.</p>
        ${reviewNotes ? `<p><strong>Admin Notes:</strong> ${reviewNotes}</p>` : ''}
        <p>You can view more details in your dashboard.</p>
        <a href="${process.env.FRONTEND_URL}/dashboard" style="background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View Dashboard</a>
      </div>
    `;

    await this.sendEmail({ to: userEmail, subject, html });
  }

  private async sendEmail(options: EmailOptions) {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_FROM || 'noreply@rideshare-sa.com',
        ...options,
      });
    } catch (error) {
      console.error('Email sending failed:', error);
    }
  }
}

export const emailService = new EmailService();
