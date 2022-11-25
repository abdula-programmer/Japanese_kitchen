import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/Cart-context";

const HeaderCartButton = ({ onShowCart }) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  const buttonClasses = `${styles.button} ${
    isButtonAnimated ? styles.bump : ""
  }`;

  const { items } = useContext(CartContext);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    setIsButtonAnimated(true);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={onShowCart} className={buttonClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
