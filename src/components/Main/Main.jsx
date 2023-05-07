import './Main.scss'
import Register from './Register/Register'
// import Cart from './Cart/Cart'
import ProgressControl from './ProgressControl/ProgressControl'

export default function Main () {
  return (
    <main className='site-main'>
      <div className='main-container'>
        <Register />
        {/* <Cart /> */}
        <ProgressControl />
      </div>
    </main>
  )
}
