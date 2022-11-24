import styles from './confirmation.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ShippingHeader from '../../components/checkout/shippingHeader'
import TextField from '../../components/ui/TextField'
import ComboBox from '../../components/ui/ComboBox'
import countries from '../../data/countries.json'
import usStates from '../../data/us_states.json'
import validator from 'validator';
import ShippingMethod from '../../components/checkout/shippingMethod'
import ProductBox from '../../components/checkout/productBox'
import CheckoutFooter from '../../components/checkout/checkoutFooter'
import HtmlHead from '../../components/htmlHead'
import { callPublicApi } from '../../utils/ApiHelper'


export default function Confirmation() {


  return (

    <div className={styles.main}>

      <HtmlHead title="Shipping" />

      <div className={styles.contentWrapper}>

        <div className={styles.content}>

          <ShippingHeader step="shipping" />

          <div className={styles.columns}>

            <div className={styles.dataColumn}>
            </div>

            <div className={styles.summaryColumn}>
            </div>

          </div>

        </div>

      </div>

      <CheckoutFooter />

    </div>

  );

}//Confirmation