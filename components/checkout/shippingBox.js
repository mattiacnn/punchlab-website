
import styles from './shippingBox.module.css'
import Link from 'next/link'


export default function ShippingBox({ countryCode, name, address, address2, city, stateOrProvince, zipCode, email, phone }) {


  function renderAddress2() {

    if (address2 == null) {
      return null;
    }

    return <p>{address2}</p>;

  }//renderAddress2


  return (

    <div className={styles.main}>

      <div className={styles.row}>

        <p className={styles.label}>Address</p>

        <div>
          <p>{name}</p>
          <p>{address}</p>
          {renderAddress2()}
          <p>{city} - {stateOrProvince} - {zipCode} - {countryCode} </p>
        </div>

        <Link href="/checkout/shipping">
          <a>
            <img className={styles.editButton} alt="edit" src='/icons/edit.png' />
          </a>
        </Link>


      </div>

      <div className={styles.row}>

        <p className={styles.label}>Contacts</p>

        <div>
          <p>{email}</p>
          <p>{phone}</p>
        </div>

      </div>

    </div>

  );

}//ShippingBox
