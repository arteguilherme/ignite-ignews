import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  const stripeCustomer = await stripe.customers.create({
    email: session.user.email,
    // metadata
  });

  if (req.method === 'POST') {
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      success_url: `${process.env.BASE_URL}/posts`,
      cancel_url: process.env.BASE_URL,
      line_items: [
        {price: 'price_1KX9J3EfJnDzwDuQak7s6aB0', quantity: 1},
      ],
      mode: 'subscription',
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      allow_promotion_codes: true
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}