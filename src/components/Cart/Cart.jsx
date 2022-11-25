import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "./../UI/Modal/Modal";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";

const Cart = ({ onHideCart }) => {
  const { totalAmount, items, addItem, removeItem } = useContext(CartContext);

  const totalAnmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const onAddItemHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const onRemoveItemHandler = (id) => removeItem(id);

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {items.map((item) => {
        const { name, id, price, amount } = item;

        return (
          <CartItem
            key={id}
            name={name}
            id={id}
            price={price}
            amount={amount}
            onAdd={() => onAddItemHandler(item)}
            onRemove={() => onRemoveItemHandler(id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAnmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onHideCart}>
          Закрыть
        </button>
        {hasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </Modal>
  );
};

export default Cart;
