import Link from 'next/link'
import Image from 'next/image'
import styles from './checkoutHeader.module.css'
import logo from '../../public/images/logo_header.png'


export default function CheckoutHeader({ step }) {


  return (

    <div className={styles.header}>

      <div>

        <Image
          className={styles.logo}
          alt="PunchLab"
          src={logo}
          width={130}
          height={30} />

      </div>

      <ul className={styles.breadcrumbs}>
        <li>
          <Link href="/checkout/shipping">
            <a>1. Shipping info</a>
          </Link>
        </li>
        <li>
          <p className={step == 'payment' ? null : styles.disabled}>2. Payment</p>
        </li>
        <li>
          <p className={styles.disabled}>3. Confirmation</p>
        </li>
      </ul>

    </div>

  );

}//CheckoutHeader
