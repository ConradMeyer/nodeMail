// import moment from 'moment';
// let laHora = moment().format('LTS')
// console.log(`Hola Mundo, son las ${laHora}`);

//Requerimos el paquete
let nodemailer = require('nodemailer');
let user = require('./user.js');

//Creamos el objeto de transporte
let transporter = nodemailer.createTransport({
service: 'gmail',
auth: user
});

let mensaje = "Hola desde nodejs... je je je";

let mailOptions = {
from: 'meyeralten@gmail.com',
to: 'luisyagofdez@gmail.com',
subject: 'Test mailing from Nodejs',
text: mensaje
};

transporter.sendMail(mailOptions, function email(error, info){
if (error) {
    console.log(error);
} else {
    console.log('Email enviado: ' + info.response);
}
});