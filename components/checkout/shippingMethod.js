import RadioButton from '../ui/radioButton';
import styles from './shippingMethod.module.css'
import { formatPrice } from '../../utils/FormatHelper'


export default function ShippingMethod({ shippingMethods, currency, selectedIndex, onChange }) {


  function renderMethods() {

    return shippingMethods?.map((method, index) => renderMethod(method, index));

  }//renderMethods


  function renderMethod(method, index) {

    return <div key={index} className={styles.method} onClick={() => { onChange(index) }}>

      <div>
        <RadioButton className={styles.radioButton} isSelected={selectedIndex === index} />
      </div>

      <div className={styles.details}>
        <p className={styles.methodName}>{method.name}</p>
        <p className={styles.methodDescription}>{method.description}</p>
      </div>

      <div>
        <p className={styles.price}>{formatPrice(method.price, currency)}</p>
      </div>

    </div>;

  }//renderMethod


  return (

    <div className={styles.main}>

      <p className={styles.title}>Shipping method</p>

      {renderMethods()}

    </div>

  );

}//ShippingMethod
