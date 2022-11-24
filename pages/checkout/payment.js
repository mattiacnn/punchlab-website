import styles from './payment.module.css'

import CheckoutHeader from '../../components/checkout/checkoutHeader'
import CheckoutFooter from '../../components/checkout/checkoutFooter'
import HtmlHead from '../../components/htmlHead'
import StripePayment from '../../components/checkout/stripePayment'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe('pk_test_mNISHJn9j3e7zRGRdVSFlKsz00awMSNbSc');


export default function Payment() {


  return (

    <div className={styles.main}>

      <HtmlHead title="Payment" />

      <div className={styles.contentWrapper}>

        <div className={styles.content}>

          <CheckoutHeader step="payment" />

          <Elements stripe={stripePromise} >
            <StripePayment />
          </Elements>

        </div>

      </div>

      <CheckoutFooter />

    </div>

  );

}//Payment
