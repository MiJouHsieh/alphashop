import styles from './InputGroup.module.scss'
export default function InputGroup ({ inputLabel, layoutLg, layoutSm, placeholder }) {
  return (
    <div className={`${styles.inputGroup} ${layoutLg} ${layoutSm}`}>
      <div className={styles.inputLabel}>{inputLabel}</div>
      <input type='text' placeholder={placeholder} />
    </div>
  )
}
