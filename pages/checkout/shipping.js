import styles from './shipping.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import TextField from '../../components/ui/TextField'
import ComboBox from '../../components/ui/ComboBox'
import countries from '../../data/countries.json'
import usStates from '../../data/us_states.json'
import validator from 'validator';
import ShippingMethod from '../../components/checkout/shippingMethod'
import ProductBox from '../../components/checkout/productBox'
import CheckoutHeader from '../../components/checkout/checkoutHeader'
import CheckoutFooter from '../../components/checkout/checkoutFooter'
import HtmlHead from '../../components/htmlHead'
import { callPublicApi } from '../../utils/ApiHelper'



function getListOfCountryNames() {

  const names = [];

  for (let i = 0; i < countries.length; i++) {
    names.push(countries[i].name);
  }

  return names;

}//getListOfCountryNames


function getCountryCode(countryName) {

  for (let i = 0; i < countries.length; i++) {
    if (countries[i].name.toLocaleLowerCase() === countryName.toLocaleLowerCase()) {
      return countries[i].code;
    }
  }

  return null;

}//getCountryCode


export default function Shipping() {


  const router = useRouter();

  const [offering, setOffering] = useState();
  const [coupon, setCoupon] = useState();
  const [shippingMethodIndex, setShippingMethodIndex] = useState(0);

  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState();

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState();

  const [address2, setAddress2] = useState('');

  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState();

  const [stateOrProvince, setStateOrProvince] = useState('');
  const [stateOrProvinceError, setStateOrProvinceError] = useState();

  const [zipCode, setZipCode] = useState('');
  const [zipCodeError, setZipCodeError] = useState();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState();

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState();


  //get country
  useEffect(() => {

    async function getCountry() {

      const url = 'https://api.ipregistry.co?key=2c1rtdi1ojwlhjbx&fields=currency,location';

      try {

        const response = await fetch(url);
        const data = await response.json();
        const countryCode = data.location.country.code;

        for (let i = 0; i < countries.length; i++) {
          if (countries[i].code.toLocaleLowerCase() === countryCode.toLocaleLowerCase()) {
            setCountry(countries[i].name);
          }
        }

      } catch (error) {

        setCountry('');
        console.log(error);

      }

    }//getCountry

    if (localStorage.getItem('country') == null) {
      getCountry();
    }

  }, []);


  //get offering
  useEffect(() => {

    async function getOffering() {

      const { data, error } = await callPublicApi('getOffering/', { countryCode: getCountryCode(country) });

      if (data?.offering) {
        setShippingMethodIndex(0);
        setOffering(data.offering);
      } else {
        console.log(error);
      }

    }//getOffering

    if (country) {
      getOffering();
    }

  }, [country]);


  //get coupon
  useEffect(() => {

    const params = router.query;

    async function getCoupon() {

      const { data, error } = await callPublicApi('getCoupon/', { couponId: params.coupon });

      if (data?.couponData) {
        setCoupon(data.couponData);
      } else {
        console.log(error);
      }

    }//getCoupon

    if (params.coupon) {
      getCoupon();
    }

  }, [router.query]);


  //load last data
  useEffect(() => {

    setCountry(localStorage.getItem('country') ?? '');
    setName(localStorage.getItem('name') ?? '');
    setAddress(localStorage.getItem('address') ?? '');
    setAddress2(localStorage.getItem('address2') ?? '');
    setCity(localStorage.getItem('city') ?? '');
    setStateOrProvince(localStorage.getItem('stateOrProvince') ?? '');
    setZipCode(localStorage.getItem('zipCode') ?? '');
    setEmail(localStorage.getItem('email') ?? '');
    setPhone(localStorage.getItem('phone') ?? '');

  }, []);


  function goToPayment() {

    if (checkCountry() === false ||
      checkName() === false ||
      checkAddress() === false ||
      checkCity() === false ||
      checkStateOrProvince() === false ||
      checkZipCode() === false ||
      checkEmail() === false ||
      checkPhone() === false) {

      alert('ERROR');
      return;

    }

    //save data

    localStorage.setItem('country', country);
    localStorage.setItem('countryCode', getCountryCode(country));
    localStorage.setItem('name', name);
    localStorage.setItem('address', address);
    localStorage.setItem('address2', address2);
    localStorage.setItem('city', city);
    localStorage.setItem('stateOrProvince', stateOrProvince);
    localStorage.setItem('zipCode', zipCode);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    localStorage.setItem('offering', JSON.stringify(offering));
    localStorage.setItem('shippingMethodIndex', shippingMethodIndex);

    if (coupon) {
      localStorage.setItem('coupon', JSON.stringify(coupon));
    } else {
      localStorage.setItem('coupon', null);
    }

    //go to payment

    router.push('/checkout/payment');

  }//goToPayment


  function checkCountry(value) {

    const valueToCheck = value ?? country;

    if (valueToCheck.length === 0) {
      setCountryError('Insert your country');
      return false;
    }

    return true;

  }//checkCountry


  function checkName() {

    if (name.length <= 5) {
      setNameError('Insert your name');
      return false;
    }

    return true;

  }//checkName 


  function checkAddress() {

    if (address.length <= 5) {
      setAddressError('Insert the address');
      return false;
    }

    return true;

  }//checkAddress 


  function checkCity() {

    if (city.length <= 2) {
      setCityError('Insert the city');
      return false;
    }

    return true;

  }//checkCity 


  function checkStateOrProvince(value) {

    if ((value && value <= 1) || stateOrProvince.length <= 1) {
      setStateOrProvinceError('Insert state or province');
      return false;
    }

    return true;

  }//checkStateOrProvince 


  function checkZipCode() {

    if (validator.isPostalCode(zipCode, 'any') === false) {
      setZipCodeError('Insert the postal code');
      return false;
    }

    return true;

  }//checkZipCode 


  function checkEmail() {

    if (validator.isEmail(email) === false) {
      setEmailError('Insert a valid email');
      return false;
    }

    return true;

  }//checkEmail 


  function checkPhone() {

    if (validator.isMobilePhone(phone, 'any') === false) {
      setPhoneError('Insert a valid phone number');
      return false;
    }

    return true;

  }//checkPhone 


  function renderStateOrProvince() {

    if (country === 'United States') {

      return <ComboBox
        className={styles.fieldInRow}
        type="text"
        label="State"
        value={stateOrProvince}
        error={stateOrProvinceError}
        onChange={(value) => { setStateOrProvince(value); setStateOrProvinceError(null) }}
        onBlur={(value) => checkStateOrProvince(value)}
        listId='states'
        options={usStates.sort()} />

    } else {

      return <TextField
        className={styles.fieldInRow}
        type="text"
        label="State or province"
        value={stateOrProvince}
        error={stateOrProvinceError}
        onChange={(value) => { setStateOrProvince(value); setStateOrProvinceError(null) }}
        onBlur={checkStateOrProvince} />

    }


  }//renderStateOrProvince


  return (

    <div className={styles.main}>

      <HtmlHead title="Shipping" />

      <div className={styles.contentWrapper}>

        <div className={styles.content}>

          <CheckoutHeader step="shipping" />

          <div className={styles.columns}>

            <div className={styles.dataColumn}>

              <p className={styles.title}>Shipping address</p>

              <ComboBox
                type="text"
                label="Country"
                value={country}
                error={countryError}
                onChange={(value) => { setCountry(value); setCountryError(null) }}
                onBlur={(value) => checkCountry(value)}
                listId='countries'
                options={getListOfCountryNames()} />

              <TextField
                type="text"
                label="Full name"
                value={name}
                error={nameError}
                onChange={(value) => { setName(value); setNameError(null) }}
                onBlur={checkName} />

              <TextField
                type="text"
                label="Address"
                value={address}
                error={addressError}
                onChange={(value) => { setAddress(value); setAddressError(null) }}
                onBlur={checkAddress} />

              <TextField
                type="text"
                label="Address Line 2"
                optional={true}
                value={address2}
                onChange={setAddress2} />

              <TextField
                type="text"
                label="City"
                value={city}
                error={cityError}
                onChange={(value) => { setCity(value); setCityError(null) }}
                onBlur={checkCity} />

              <div className={styles.row}>

                {renderStateOrProvince()}

                <TextField
                  className={styles.fieldInRow}
                  type="text"
                  label="Postal code"
                  value={zipCode}
                  error={zipCodeError}
                  onChange={(value) => { setZipCode(value); setZipCodeError(null) }}
                  onBlur={checkZipCode} />

              </div>

              <p className={styles.contactLabel}>Contact info</p>

              <TextField
                type="email"
                label="Email"
                value={email}
                error={emailError}
                onChange={(value) => { setEmail(value); setEmailError(null) }}
                onBlur={checkEmail} />

              <TextField
                type="tel"
                label="Phone number"
                value={phone}
                error={phoneError}
                onChange={(value) => { setPhone(value); setPhoneError(null) }}
                onBlur={checkPhone} />


              <ShippingMethod
                shippingMethods={offering?.shipping}
                currency={offering?.currency}
                selectedIndex={shippingMethodIndex}
                onChange={setShippingMethodIndex} />

            </div>

            <div className={styles.summaryColumn}>

              <div className={styles.stickySummary}>

                <p className={styles.title}>Order summary</p>

                <ProductBox
                  productPrice={offering?.strapPrice}
                  shipping={offering?.shipping[shippingMethodIndex]}
                  coupon={coupon}
                  currency={offering?.currency} />

                <div className={styles.callToAction}>
                  <p>30-Day Money-Back Guarantee</p>
                  <button className={styles.nextButton} onClick={goToPayment}>Continue</button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <CheckoutFooter />

    </div>

  );

}//Shipping
