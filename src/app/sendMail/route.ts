// app/sendEmail/route.ts

import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { email, message, phone } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'yahoo',
            auth: {
                user: process.env.YAHOO_USER!,
                pass: process.env.YAHOO_PASS!,
            },
        });

        const mailOptions = {
            from: process.env.YAHOO_USER!,
            to: 'contact@cheminees-du-nord.fr',
            subject: 'Nouveau message de Cheminées du Nord',
            html: `
                <div style="background-color: #f5f5f5; padding: 20px;">
                    <h2 style="color: #333333;">Nouveau message depuis la page de contact du Cheminées du Nord</h2>
                    <p style="color: #666666;">Email: ${email}</p>
                    <p style="color: #666666;">Phone: ${phone}</p>
                    <p style="color: #666666;">Message: ${message}</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ success: true, message: 'Email sent successfully!' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error); // Log error to console
        return new Response(
            JSON.stringify({ success: false, message: 'Failed to send email.', error: (error as Error).message }),
            { status: 500 }
        );
    }
}
