const nodemailer = require('nodemailer');
const config = require('./config');

async function enviarCorreoContacto(datos) {
  try {
    const transporter = nodemailer.createTransport({
      service: config.correoEmpresa.servicio, 
      port: 465,
      auth: {
        user: config.correoEmpresa.usuario,
        pass: config.correoEmpresa.clave
      }
    });

    const mail = {
      from: `"Formulario Web" <${config.correoEmpresa.usuario}>`,
      to: config.correoEmpresa.destino,
      subject: 'Nuevo contacto desde la página web',
      text: `
Nombre: ${datos.nombre}
Correo: ${datos.correo}
Teléfono: ${datos.telefono}
Región: ${datos.region}

Mensaje:
${datos.mensaje}
      `
    };

    await transporter.sendMail(mail);
    console.log('✅ Correo enviado correctamente');
  } catch (error) {
    console.error('❌ Error al enviar correo:', error);
  }
}

module.exports = enviarCorreoContacto;
