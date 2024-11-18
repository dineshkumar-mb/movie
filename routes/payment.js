import express from 'express';
import Stripe from 'stripe';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

if (!process.env.STRIPE_SECRET_KEY) {
  console.error("STRIPE_SECRET_KEY is not defined in environment variables.");
}

router.post('/payment', async (req, res) => {
  const { amount } = req.body; // Removed 'currency'

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // amount in cents
      currency: 'inr', // Hardcoded to 'inr'
    });
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({ error: error.message });
  }
});

export default router;
