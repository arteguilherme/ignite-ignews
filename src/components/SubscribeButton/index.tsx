import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export default function SubscribeButton({
  priceId,
}: SubscribeButtonProps) {
  async function handleSubscribe() {
    const { data: session } = useSession();

    if (!session) {
      signIn('github');
      return;
    }

    try {
      const response = await api.post('/subscribe');
      console.log(response);

      const { sessionId } = response.data;
      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      return error.message;
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
