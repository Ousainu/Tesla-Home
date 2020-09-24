const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HUzqyIgNqSzVmiGi31AaOYzduxwvhQatClpIvG18bC67qpe3Vdyu5RgFgFD0oc34wLDXZhRzMTgU50vm0PKye2w00MXZF0qUz"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-59d9c/us-central1/api
