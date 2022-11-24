
import styles from './productBox.module.css'
import Image from 'next/image'
import strap from '../../public/images/strap1.jpg'
import { formatPrice } from '../../utils/FormatHelper'



export default function ProductBox({ productPrice, shipping, coupon, currency }) {


  function getCouponValue() {

    return (productPrice / 100 * coupon.percent_off).toFixed(2);

  }//getCouponValue


  function getCurrencyLabel(price) {

    return formatPrice(price, currency);

  }//getCurrencyLabel


  function renderCoupon() {

    if (coupon == null) {
      return null;
    }

    const value = getCouponValue();

    return <div className={styles.coupon}>
      <p className={styles.couponLabel}>{coupon.name}</p>
      <p>{getCurrencyLabel(-value)}</p>
    </div>

  }//renderCoupon


  function renderTotal() {

    if (productPrice == null) {
      return 0;
    }

    let total = productPrice;

    if (coupon) {
      const couponValue = getCouponValue();
      total -= couponValue;
    }

    total += shipping.price;

    return total.toFixed(2);

  }//renderTotal


  return (

    <div className={styles.main}>

      <div className={styles.product}>

        <Image
          className={styles.productImage}
          alt="PunchLab Strap"
          src={strap}
          width={80}
          height={80}
          layout='fixed' />

        <div className={styles.productDetails}>
          <p className={styles.productName}>PunchLab Strap</p>
          <p className={styles.productDescription}>Tracking strap for standing and hanging bags</p>
        </div>

        <p>{getCurrencyLabel(productPrice)}</p>

      </div>

      {renderCoupon()}

      <div className={styles.shipping}>
        <p className={styles.shippingLabel}>Shipping</p>
        <p>{getCurrencyLabel(shipping?.price)}</p>
      </div>

      <div className={styles.total}>
        <p className={styles.totalLabel}>Total (tax included)</p>
        <p>{getCurrencyLabel(renderTotal())}</p>
      </div>

    </div>

  );

}//ProductBox
