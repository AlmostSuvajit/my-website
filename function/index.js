const functions = require('./node_modules/firebase-functions/lib');
const firebase = require('./node_modules/firebase-admin/lib');
const express = require('./node_modules/@types/express');
const engines = require('./node_modules/consolidate');

const firebaseApp = firebase.initializeApp({
    credential: firebase.credential.cert({
        projectId: '',
        clientEmail: '',
        privateKey: '',
    }),
    databaseURL: ''
});
function getFacts() {
    const ref = firebaseApp.database().ref('raven');
    return ref.once('value').then(snap => snap.val());
}

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/raven', (req, res) => {
    // res.set('Cache-Control', 'public', 'max-age=300', 's-maxage=600')
    getFacts().then(data => {
        res.render('index', { data });
    });
});

app.get('/api', (req, res) => {
    res.set('Cache-Control', 'public', 'max-age=300', 's-maxage=600')
    getFacts().then(data => {
        res.json(data);
    });
});

exports.app = functions.https.onRequest(app);
