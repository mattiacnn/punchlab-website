
import styles from './stripePayment.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ShippingBox from '../../components/checkout/shippingBox'
import CreditCardBox from '../../components/checkout/creditCardBox'
import ProductBox from '../../components/checkout/productBox'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { callPublicApi } from '../../utils/ApiHelper';



export default function StripePayment() {


  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();

  const [country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState('');
  const [stateOrProvince, setStateOrProvince] = useState();
  const [zipCode, setZipCode] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const [offering, setOffering] = useState();
  const [coupon, setCoupon] = useState();
  const [shippingMethodIndex, setShippingMethodIndex] = useState();

  const [showApplePay, setShowApplePay] = useState();
  const [showGooglePay, setShowGooglePay] = useState();
  const [paymentRequest, setPaymentRequest] = useState();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');


  //load shipping data
  useEffect(() => {

    const storageCountry = localStorage.getItem('country');
    const storageCountryCode = localStorage.getItem('countryCode');
    const storageName = localStorage.getItem('name');
    const storageAddress = localStorage.getItem('address');
    const storageAddress2 = localStorage.getItem('address2');
    const storageCity = localStorage.getItem('city');
    const storageStateOrProvince = localStorage.getItem('stateOrProvince');
    const storageZipCode = localStorage.getItem('zipCode');
    const storageEmail = localStorage.getItem('email');
    const storagePhone = localStorage.getItem('phone');
    const storageOffering = JSON.parse(localStorage.getItem('offering'));
    const storageShippingMethodIndex = parseInt(localStorage.getItem('shippingMethodIndex'));
    const storageCoupon = localStorage.getItem('coupon') ? JSON.parse(localStorage.getItem('coupon')) : null;

    if (storageCountry == null ||
      storageCountryCode == null ||
      storageName == null ||
      storageAddress == null ||
      storageCity == null ||
      storageStateOrProvince == null ||
      storageZipCode == null ||
      storageEmail == null ||
      storagePhone == null ||
      storageOffering == null ||
      storageShippingMethodIndex == null) {

      router.replace('/checkout/shipping');
      return;
    }

    setCountry(storageCountry);
    setCountryCode(storageCountryCode);
    setName(storageName);
    setAddress(storageAddress);
    setAddress2(storageAddress2);
    setCity(storageCity);
    setStateOrProvince(storageStateOrProvince);
    setZipCode(storageZipCode);
    setEmail(storageEmail);
    setPhone(storagePhone);
    setOffering(storageOffering);
    setCoupon(storageCoupon);
    setShippingMethodIndex(storageShippingMethodIndex);

  }, []);


  useEffect(() => {

    if (countryCode == null || offering == null || stripe == null) {
      return;
    }

    const pr = stripe.paymentRequest({
      currency: offering.currency.toLowerCase(),
      country: countryCode,
      total: {
        label: 'TODO LABEL',
        amount: 1999 //TODO
      }
    });

    pr.on('cancel', async (event) => {

      console.log('cancel', event);

    });

    pr.on('paymentmethod', async (event) => {

      //in questo momento ho la card memorizzata in google pay / apple pay
      console.log('paymentmethod', event.paymentMethod.id);

      /*

      //confermiamo il pagamento senza gestire le ulteriori azioni, altrimenti potremmo aprire 2 modal contemporaneamente
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        { payment_method: event.paymentMethod.id },
        { handleActions: false });

      if (error) {
        event.complete('fail');
        return;
      }

      //chiudiamo il modal di apple pay / google pay
      event.complete('success');

      //se servono ulteriori azioni, allora usimao confirmCardPayment per farle
      if(paymentIntent.status === 'requires_action'){
        stripe.confirmCardPayment(clientSecret);
      }
      */

    });

    pr.canMakePayment().then((result) => {

      if (result) {
        setPaymentRequest(pr);
        setShowApplePay(result.applePay);
        setShowGooglePay(result.googlePay);
      }

    });

  }, [stripe, offering, countryCode]);


  async function payWithCard() {

    if (offering == null ||
      shippingMethodIndex == null ||
      coupon == null ||
      stripe == null ||
      elements == null) {
      return;
    }

    //create secret client

    const params = {
      offeringId: offering.id,
      shippingMethodIndex: shippingMethodIndex,
      couponId: coupon.id
    };

    console.log(params);

    const { data, error: serverError } = await callPublicApi('createPaymentIntent', params);

    if (serverError) {
      alert(serverError);
      return;
    }

    console.log(data.clientSecret);

    const { error, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    console.log(paymentIntent);

    /*
    if (error) {
      alert(error);
      console.log(error.message);
    } else {
      console.log(paymentIntent.id);
    }
    */

  }//pay


  function payWithAppleOrGooglePay() {

    paymentRequest.show();

  }//payWithAppleOrGooglePay


  function renderApplePay() {

    if (showApplePay !== true) {
      return null;
    }

    let className = styles.paymentButton;
    if (selectedPaymentMethod === 'applePay') {
      className += ' ' + styles.paymentButtonSelected;
    }

    return <div className={className} onClick={() => setSelectedPaymentMethod('applePay')}>
      <p>Apple Pay</p>
      <img className={styles.paymentIcon} alt="edit" src='/icons/apple_pay.png' />
    </div>

  }//renderApplePay


  function renderGooglePay() {

    if (showGooglePay !== true) {
      return null;
    }

    let className = styles.paymentButton;
    if (selectedPaymentMethod === 'googlePay') {
      className += ' ' + styles.paymentButtonSelected;
    }

    return <div className={className} onClick={() => setSelectedPaymentMethod('googlePay')}>
      <p>Google Pay</p>
      <img className={styles.paymentIcon} alt="edit" src='/icons/google_pay.png' />
    </div>

  }//renderGooglePay


  return (

    <div className={styles.columns}>

      <div className={styles.dataColumn}>

        <p className={styles.title}>Payment method</p>

        {renderApplePay()}
        {renderGooglePay()}

        <CreditCardBox
          onClick={() => setSelectedPaymentMethod('card')}
          isSelected={selectedPaymentMethod === 'card'}
          isAlone={showApplePay === false && showGooglePay === false} />

      </div>

      <div className={styles.summaryColumn}>

        <div className={styles.stickySummary}>

          <p className={styles.title}>Shipping info</p>

          <ShippingBox
            countryCode={countryCode}
            name={name}
            address={address}
            address2={address2}
            city={city}
            stateOrProvince={stateOrProvince}
            zipCode={zipCode}
            email={email}
            phone={phone} />

          <p className={styles.title}>Order summary</p>

          <ProductBox
            productPrice={offering?.strapPrice}
            shipping={offering?.shipping[shippingMethodIndex]}
            coupon={coupon}
            currency={offering?.currency} />

          <div className={styles.callToAction}>
            <p>30-Day Money-Back Guarantee</p>
            <button className={styles.nextButton} onClick={payWithCard}>Pay</button>
          </div>

        </div>

      </div>

    </div>

  );

}//StripePayment
