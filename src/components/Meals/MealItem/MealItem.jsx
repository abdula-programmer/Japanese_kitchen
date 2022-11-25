import React, {useContext} from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/Cart-context"

const MealItem = ({ name, description, price, id }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  const cartContext = useContext(CartContext)
  
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id,
      name,
      description,
      amount: amount,
      price,
    });
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id}/>
      </div>
    </li>
  );
};

export default MealItem;
