const express = require('express');
const path = require('path');
const config = require('./config');
const enviarCorreoContacto = require('./mailer');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/contacto', async (req, res) => {
  console.log('Headers:', req.headers['content-type']);
  console.log('BODY RECIBIDO:', req.body); 
  await enviarCorreoContacto(req.body);
  res.redirect('/gracias.html');
});

app.listen(config.puerto, () => {
  console.log('Servidor activo en puerto ' + config.puerto);
});
