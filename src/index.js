const express = require('express');
const app = express();

const sendEmail = require('./sendEmail');
const view = require('./view');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.get('/send-email', function(req, res){

    const receiverName = 'SOW Safi';
    const senderName = 'fouzo09';
    const emailSubject = `Prise de contact avec ${receiverName}`

    const emailContent = view(receiverName, senderName);

    sendEmail(emailSubject, emailContent).then((data)=>{
        return res.status(200).json({message: 'Email envoye avec succes.'});
    }).catch((error)=>{
        return res.status(500).json({message: 'Erreur d\'envoi du mail.'});
    });

});


app.listen(PORT, ()=>console.log(`Serveur est demare http://localhost:${PORT}`))
