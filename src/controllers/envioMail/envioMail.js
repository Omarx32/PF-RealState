const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: "wanderluxe01@gmail.com",
        pass: "zdsk oyjx wnlt fjhr",
    }
});
 

async function sendSuccessEmail() {
    try {
      // Enviar un correo electrónico de compra exitosa
      const info = await transporter.sendMail({
        from: '"Wander Luxe👻" <wanderluxe01@gmail.com>',
        to: "wanderluxe01@gmail.com",
        subject: "¡Compra exitosa!",
        text: "Su compra en Wander Luxe ha sido exitosa. ¡Gracias por su compra!",
      });
  
      console.log("Mensaje de compra exitosa enviado: %s", info.messageId);
    } catch (error) {
      console.error("Error al enviar el correo electrónico de compra exitosa:", error);
    }
  }
  
  async function sendFailureEmail() {
    try {
      // Enviar un correo electrónico de compra fallida
      const info = await transporter.sendMail({
        from: '"Wander Luxe👻" <wanderluxe01@gmail.com>',
        to: "wanderluxe01@gmail.com",
        subject: "¡Compra fallida!",
        text: "Su compra en Wander Luxe ha sido rechazada. Por favor, verifique su información de pago.",
      });
  
      console.log("Mensaje de compra fallida enviado: %s", info.messageId);
    } catch (error) {
      console.error("Error al enviar el correo electrónico de compra fallida:", error);
    }
  }
  
module.exports = {sendSuccessEmail, sendFailureEmail};


