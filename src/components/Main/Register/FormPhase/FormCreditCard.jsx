import styles from './FormCreditCard.module.scss'
import InputGroup from './InputGroup.jsx'

export default function FormCreditCard () {
  return (
    <form className='col col-12' data-phase='credit-card'>
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={`${styles.formBody} col col-12`}>
        <div className={`${styles.row} col col-12`}>
          <InputGroup
            layoutLg='input-w-lg-4'
            layoutSm='input-w-sm-full'
            inputLabel='持卡人姓名'
            placeholder='John Doe'
          />
        </div>
        <div className={`${styles.row} col col-12`}>
          <InputGroup
            layoutLg='input-w-lg-4'
            layoutSm='input-w-sm-full'
            inputLabel='卡號'
            placeholder='J1111 2222 3333 4444'
          />
        </div>
        <div className={`${styles.row} col col-12`}>
          <InputGroup
            layoutLg='input-w-lg-3'
            layoutSm='input-w-sm-s3'
            inputLabel='有效期限'
            placeholder='MM/YY'
          />
          <InputGroup
            layoutLg='input-w-lg-3'
            layoutSm='input-w-sm-s3'
            inputLabel='CVC / CCV'
            placeholder='123'
          />
        </div>
      </section>
    </form>
  )
}
