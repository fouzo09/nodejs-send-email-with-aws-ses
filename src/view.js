const view = function(receiverName, senderName){
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>EMAIL WITH SES</title>
            </head>
            <body>
                <h4>Cher(e) ${receiverName}</h4>

                <p>
                    J'espère que ce courriel vous trouve en bonne santé et de bonne humeur. Je prends contact avec vous aujourd'hui pour te dire bonsoir.
                </p>
                <p>
                    Je serais ravi(e) de discuter davantage de AWS SES et de collaborer avec toi. Je pense que nos compétences complémentaires pourraient grandement contribuer à résultat souhaité.
                </p>

                <p>
                    N'hésitez pas à me faire part de vos réflexions et de vos idées sur la question. Je suis ouvert(e) à toute suggestion ou proposition que vous pourriez avoir.
                </p>

                <p>
                    Je vous remercie sincèrement pour votre attention et je reste à votre disposition pour tout complément d'information nécessaire. J'attends avec impatience de recevoir votre réponse.
                </p>

                <p>${senderName}</p>
            </body>
        </html>
    `;
}

module.exports = view;