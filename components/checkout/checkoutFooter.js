import Link from 'next/link'
import styles from './checkoutFooter.module.css'
import { useMemo } from 'react'


export default function CheckoutFooter() {


  const year = useMemo(()=>{ 
    return new Date().getFullYear();
  });
  

  return (

    <div className={styles.main}>

      <Link href="/">
        <a>Terms & conditions</a>
      </Link>

      <Link href="/">
        <a>Privacy Policy</a>
      </Link>

      <p>© PunchLab {year}</p>

    </div>

  );

}//CheckoutFooter
