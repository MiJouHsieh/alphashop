import styles from './FormShipping.module.scss'

function ShippingItem ({ dataPrice, id, name, text, price, period }) {
  return (
    <label classNameName={`${styles.radioGroup} col col-12`} data-price={dataPrice}>
      <input id={id} type='radio' name={name} />
      <div className={styles.radioInfo}>
        <div className={`${styles.row} col col-12`}>
          <div className={styles.text}>{text}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div className={`${styles.period} col col-12`}>{period}</div>
      </div>
      <div className={styles.radioBoxBorder} />
    </label>
  )
}

export default function FormShipping () {
  return (
    <form className='col col-12' data-phase='shipping'>
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={`${styles.formBody} col col-12`}>
        <ShippingItem
          dataPrice='0'
          id='shippingStandard'
          name='shipping'
          text='標準運送'
          price='免費'
          period='約 3~7 個工作天'
        />
        <ShippingItem
          dataPrice='500'
          id='shippingDhl'
          name='shipping'
          text='DHL 貨運'
          price='500'
          period='48 小時內送達'
        />
      </section>
    </form>
  )
}
