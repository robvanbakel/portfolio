const express = require('express');
const sgMail = require('@sendgrid/mail');
require('dotenv').config()

const app = express();

sgMail.setApiKey(process.env.SENDGRID_KEY);

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.post('/contact', (req, res) => {

  console.log(req.body)

  sgMail.send({
    to: 'info@robvanbakel.com',
    from: 'info@robvanbakel.nl',
    replyTo: req.body.email,
    subject: `Rob van Bakel – Contactformulier: ${req.body.name}`,
    text: req.body.message,
  })
    .catch((error) => {
      console.log(error.response.body.errors)
    })

  res.end();

})

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))