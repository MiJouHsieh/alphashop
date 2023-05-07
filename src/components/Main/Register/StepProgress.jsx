import styles from './StepProgress.module.scss'

function ProgressGroup ({ stepNumber, progressLabel, dataPhase }) {
  return (
    <span className={styles.progressGroup} data-phase={dataPhase}>
      <span className={styles.progressIcon}>
        <span className={styles.text}>{stepNumber}</span>
        {/* <svg className={`${styles.icon} cursor-point`}>
          <use xlinkHref={`${icons}#pg-complete.svg`} />
        </svg> */}
      </span>
      <span className={styles.progressLabel}>{progressLabel}</span>
    </span>
  )
}

export default function StepProgress () {
  return (
    <>
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>

      <section className={`${styles.progressContainer} col col-12`}>
        <ProgressGroup
          dataPhase='address'
          stepNumber='1'
          progressLabel='寄送地址'
        />
        <span className={styles.progressBar} data-order='1' />
        <ProgressGroup
          dataPhase='shipping'
          stepNumber='2'
          progressLabel='運送方式'
        />
        <span className={styles.progressBar} data-order='2' />
        <ProgressGroup
          dataPhase='credit-card'
          stepNumber='3'
          progressLabel='付款資訊'
        />
      </section>
    </>
  )
}
