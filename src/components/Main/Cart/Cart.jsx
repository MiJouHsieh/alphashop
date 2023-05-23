import minusIcon from "../../../assets/icons/minus.svg"
import plusIcon from "../../../assets/icons/plus.svg"
import styles from './Cart.module.scss'
import { useState } from 'react'

const productData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  }
]
function ListItems ({products, onDecreaseClick, onIncreaseClick}) {
  
  return (
    <ul>
      {products.map(product => (
        <div key={product.id} className={`${styles.productContainer} col col-12`} data-count='0' data-price={product.price}>
          <img className={styles.imgContainer} src={product.img} alt={product.name} />
          <div className={styles.productInfo}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productControlContainer}>
              <div className={styles.productControl}>
                {/* 商品數量減一 */}
                <span
                  onClick={() => {
                    onDecreaseClick(product.id)
                }}>
                  <span className={styles.productAction}>
                    <img src={minusIcon} alt="minus icon" />
                  </span>
                </span>
                {/* 商品數量 */}
                <span className={styles.productCount}>{product.quantity}</span>
                {/* 商品數量加一 */}
                <span onClick={() => {
                  onIncreaseClick(product.id)
                }}>
                  <span className={styles.productAction}>
                    <img src={plusIcon} alt="plus icon" />
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.price}>{product.price * product.quantity}</div>
          </div>
        </div>
      ))}
    </ul>
  )
}

export default function Cart () {
  const [products, setProducts] = useState(productData)
  let count = 0
  products.forEach(product => {
    count = count + product.price * product.quantity
  })
  function handleDecreaseClick(productId) {
    let changeProducts = products.map(product => {
      if(product.id === productId) {
        return {
          ...product,
          // 數量最低為0
          quantity: (product.quantity - 1) > 0 ? (product.quantity - 1) : 0 
        }
      } else {
        return product
      }
    })
    setProducts(changeProducts)
  }

  function handleIncreaseClick(productId) {
    const changeProducts = products.map(product => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      } else {
        return product
      }
    })
    setProducts(changeProducts)
  }

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section className={`${styles.productList} col col-12`} data-total-price='0'>
        <ListItems
          products={products}
          onDecreaseClick={handleDecreaseClick}
          onIncreaseClick={handleIncreaseClick}
        />
      </section>

      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>$ {count}</div>
      </section>
    </section>
  )
}
