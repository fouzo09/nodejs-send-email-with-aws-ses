
# NODEJS WITH AMAZON SES

Envoi d'email avec le service d'amazon simple email service.


## Utiliser en local

Cloner le projet, assurez avoir deja installer git et node sur votre ordinateur.

```bash
  git clone https://github.com/fouzo09/nodejs-send-email-with-aws-ses.git sendemail
```

Go to the project directory

```bash
  cd sendemail
```

Installation des dependences

```bash
  npm install
```

Installation global de nodemon

```bash
  npm install -g nodemon
```

Demarrer le serveur

```bash
  npm run start
```


## Configuration du service SES
Pour ce projet nous allons configurer deux emails (expéditeur et destinataire) dans la console d'amazon en suivant les etapes suivantes:

- Accéder à la console AWS : Rendez-vous sur la console de gestion AWS à l'adresse suivante : https://console.aws.amazon.com/.

- Sélectionner SES : Dans la console AWS, recherchez "SES" dans la barre de recherche et sélectionnez "Simple Email Service".

- Vérification des adresses électroniques : Avant de pouvoir envoyer des e-mails via SES, vous devrez vérifier les adresses e-mail que vous souhaitez utiliser comme expéditeur et destinataire.
    - Sur le menu a gauche cliquez sur "Verified identities"
    - Ensuite sur le boutton sur le boutton "Create identity"
    - Pour "Identity type" selectionnez Email address
    - Pour le champ "Email address" entrez l'email expéditeur (xxx@example.com)
    - Cliquez sur le boutton "Create identity" pour valider
    - Vous allez recevoir un lien à l'email entré ci haut, cliquez pour valider
    - Repetez la même chose pour l'email destinataire
## Variables d'environement

Dans votre console AWS configurer et copiez vos credentials (Access Key Id et Secret Access Key).
Renommez le fichier .env.example en .env et coller les credentials au variables correspondantes (AWS_ACCESS_ID, AWS_SECRET_KEY), pour AWS_REGION mettez la region de creation de votre service SES, le SENDER c'est l'email expediteur et RECEIVER c'est l'email destinataire.

```bash
    PORT=5001
    AWS_ACCESS_ID=
    AWS_SECRET_KEY=
    AWS_REGION=
    SENDER=
    RECEIVER=
```


## Tech Stack

Nodejs, HTML, Amazon SES

## Auteur

- [@fouzo09](https://github.com/fouzo09)
