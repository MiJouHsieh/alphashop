// import prevIcon from "../../../assets/icons/left-arrow-black.svg"
import nextIcon from "../../../assets/icons/right-arrow.svg"
import styles from './ProgressControl.module.scss'

function NextButton ({ text }) {
  return (
    <button className={`${styles.next} cursor-point`}>
      {text}
      <span>
        <img src={nextIcon} alt="next icon" />
      </span>
    </button>
  )
}

// function PrevButton ({ text }) {
//   return (
//     <button className={`${styles.prev} cursor-point`}>
//       <span>
//         <img src={prevIcon} alt="previous icon" />
//       </span>
//       {text}
//     </button>
//   )
// }
function ButtonDataPhase ({ dataPhase, children }) {
  return (
    <section className={`${styles.buttonGroup} col col-12`} data-phase={dataPhase}>
      {children}
    </section>
  )
}

export default function ProgressControl () {
  return (
    <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
      <ButtonDataPhase
        dataPhase='address'
      >
        <NextButton
          text='下一步'
        />
      </ButtonDataPhase>
      {/* <ButtonDataPhase
        dataPhase="shipping"
      >
        <NextButton
          text = "下一步"/>
        <PrevButton
          text = "上一步"/>
      </ButtonDataPhase>
      <ButtonDataPhase
        dataPhase="credit-card"
      >
        <NextButton
          text = "確認下單"/>
      </ButtonDataPhase> */}
    </section>
  )
}
