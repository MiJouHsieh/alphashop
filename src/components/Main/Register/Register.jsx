import StepProgress from './StepProgress.jsx'
import RegisterForm from './RegisterForm.jsx'
import styles from './StepProgress.module.scss'

export default function Register () {
  return (
    <section className={`${styles.registerContainer} col col-lg-6 col-sm-12`} data-phase='1' data-total-price='0'>
      <StepProgress />
      <RegisterForm />
    </section>
  )
}
