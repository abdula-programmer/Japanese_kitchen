import React, {Fragment} from 'react'
import sushiImage from '../../img/sushi.jpg';
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';


const Header = ({onShowCart}) => {
  return (
    <Fragment>
      <header className={styles.header}>
         <h1>Япона кухня</h1>
         <HeaderCartButton onShowCart={onShowCart}/>
      </header>
      <div className={styles['main-image']}>
         <img src={sushiImage} alt="Блюда японской кухни" />
      </div>
    </Fragment>
  )
}

export default Header