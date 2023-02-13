import { transporter } from "./mailer";

export async function sendConfirmationEmail(reservation: any, customer: any) {
  const info = await transporter.sendMail({
    from: '"Confirmación de reserva" <reservacionesmiller@gmail.com>',
    to: customer.email,
    subject: `Reservación N°${reservation.id}`,
    html: `
        <body style="background-color: #F1F1F1; border-radius: 15px; padding: 10px 10px;">
            <h2 style="font-family: Verdana">Este es un correo de confirmación - No responder</h2>
            <h3 style="font-family: Verdana">🚪 ¡Su reservación fue recibida correctamente! 🍹</h3>
            <h3 style="font-family: Verdana">Gracias ${customer.firstname} ${customer.lastname} por realizar la reservación</h3>
            <p style="font-family: Verdana">
                 Su check-in es: ${reservation.check_in} y su check-out es: ${reservation.check_out}, para la habitación N°${reservation.room}.
                si tiene algún inconveniente o desea cambiar el día, por favor contactarse a este número <b>+54 11 345823</b>🛏️
            </p>
            <p style="font-family: Verdana">🛎️- Hotel Mailer -🛎️</p>
            <img src="https://raw.githubusercontent.com/Patricio91/reservation-api-rest/main/src/config/logoHotel.png">
        </body>
        `,
  });
}
