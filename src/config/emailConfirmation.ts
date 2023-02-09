import { transporter } from "./mailer";

export async function sendConfirmationEmail(reservation: any, customer: any) {
    const info = await transporter.sendMail({
        from: '"Confirmación de reserva" <reservacionesmiller@gmail.com>',
        to: customer.email,
        subject: `Reservación N°${reservation.id}`,
        html:`
            <h2>Este es un correo de confirmación - No responder</h2>
            <h3>¡Su reservación fue recibida correctamente!</h3>
            <h3>Gracias ${customer.firstname} ${customer.lastname} por realizar la reservación</h3>
            <p>
                Su check-in es: ${reservation.check_in} y su check-out es: ${reservation.check_out}, para la habitación N°${reservation.room}.
                si tiene algún inconveniente o desea cambiar el día, por favor contactarse a este número <b>+54 11 345823</b>
            </p>
            <p>🛎️- Hotel Mailler -🛎️</p>
            <img src="https://raw.githubusercontent.com/Patricio91/reservation-api-rest/main/src/config/logoHotel.png">
        `
      });
}