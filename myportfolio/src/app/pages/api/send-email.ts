import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    if (!email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Create a transporter using your email service
      const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other email services like 'SendGrid', 'Mailgun', etc.
        auth: {
          user: process.env.EMAIL_USER, // Your email address (e.g., 'your-email@gmail.com')
          pass: process.env.EMAIL_PASS, // Your email password or an App password (if 2FA is enabled)
        },
      });

      // Set up the email data
      const mailOptions = {
        from: email, // Sender's email
        to: process.env.RECEIVER_EMAIL, // Recipient's email (e.g., your email address)
        subject: subject,
        text: message,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Respond with success
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
