const AWS = require('aws-sdk');

require('dotenv').config();


const SES_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
};

const AWS_SES = new AWS.SES(SES_CONFIG);

const sendEmail = (emailSubject, emailContent)=>{
    let params = {
      Source: process.env.SENDER,
      Destination: {
        ToAddresses: [
          process.env.RECEIVER
        ],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: emailContent,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: emailSubject,
        }
      },
    };
    
    return AWS_SES.sendEmail(params).promise();
}


module.exports = sendEmail;