import { FormAddress} from './FormPhase'
import styles from './RegisterForm.module.scss'

export default function RegisterForm () {
  return (
    <section className={`${styles.formContainer} col col-12`}>
      <FormAddress />
      {/* <FormCreditCard /> */}
      {/* <FormShipping /> */}
    </section>
  )
}
