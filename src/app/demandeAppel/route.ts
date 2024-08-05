import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { phone } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'yahoo',
            auth: {
                user: process.env.YAHOO_USER!,
                pass: process.env.YAHOO_PASS!,
            },
        });

        const mailOptions = {
            from: process.env.YAHOO_USER!,
            to: 'p.alexandru008@gmail.com',
            subject: 'Demande d\'appel de Cheminées du Nord',
            html: `
                <div style="background-color: #f5f5f5; padding: 20px;">
                    <h2 style="color: #333333;">Demande d'appel depuis la page accueil du Cheminées du Nord</h2>
                    <p style="color: #666666;">Appelez le numéro de téléphone: <a href="tel:${phone}">${phone}</a></p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ success: true, message: 'Demande d\'appel envoyée avec succès!' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending request:', error);
        return new Response(
            JSON.stringify({ success: false, message: 'Échec de l\'envoi de la demande.', error: (error as Error).message }),
            { status: 500 }
        );
    }
}
