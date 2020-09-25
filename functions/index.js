const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HPvT3Ca3RgpAA5P2UXv982aSrVlvIJ4s7SjQI7DzLbeiAlqlT87ssYzNd4YtT2eifeQ0wenAKKMf6K6CCQYNfSZ00Y56MhqtU')

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;    

    console.log('Payment Request Recieved BOOM!! for this ammount >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits the currency
        currency: "usd",
    });
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-ddcc8/us-central1/api