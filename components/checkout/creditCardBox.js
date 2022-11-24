
import styles from './creditCardBox.module.css'
import { CardElement } from '@stripe/react-stripe-js'


const cardElementOptions = {
  style: {
    base: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: "14px",
    },
  },
  hidePostalCode: true
};


export default function CreditCardBox({ onClick, isSelected, isAlone }) {
  

  function renderCard() {

    if (isSelected !== true) {
      return null;
    }

    return <div className={styles.card}>

      <CardElement
        options={cardElementOptions} />

    </div>;

  }//renderCard


  let classNameMain = styles.main;
  if (isSelected && isAlone === false) {
    classNameMain += ' ' + styles.mainSelected;
  }

  let classNameButton = styles.paymentButton;
  if (isSelected && isAlone === false) {
    classNameButton += ' ' + styles.paymentButtonSelected;
  }else if(isSelected && isAlone === true){
    classNameButton += ' ' + styles.paymentButtonSelectedAlone;
  }


  return (

    <div className={classNameMain}>

      <div className={classNameButton} onClick={onClick}>
        <p>Credit Card</p>
        <div className={styles.iconsWrapper}>
          <img className={styles.paymentIcon} alt="edit" src='/icons/visa.png' />
          <img className={styles.paymentIcon} alt="edit" src='/icons/mastercard.png' />
          <img className={styles.paymentIcon} alt="edit" src='/icons/american_express.png' />
        </div>
      </div>

      {renderCard()}

    </div>

  );

}//CreditCardBox
