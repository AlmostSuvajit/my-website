const functions = require('firebase-functions');
const express = require('express');
const roasts = require('./roast');
const firebase = require('firebase-admin');
const app = express();

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);
function getRaven() {
    const ref = firebaseApp.database().ref('raven');
    return ref.once('value').then(snap => snap.val());
}

function getPerks() {
    const ref = firebaseApp.database().ref('clashperks');
    return ref.once('value').then(snap => snap.val());
}

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/roast', (req, res) => {
    res.send(roasts[Math.floor(Math.random() * roasts.length)]);
});

app.get('/raven', (req, res) => {
    getRaven().then(data => {
        res.json(data);
    });
});

app.get('/clashperks', (req, res) => {
    getPerks().then(data => {
        res.json(data);
    });
});

exports.app = functions.https.onRequest(app);
