import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = ({ id, onAddToCart }) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHundler = (e) => {
    e.preventDefault();

    const inputAmount = +amountInputRef.current.value;

    if (
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHundler}>
      <Input
        label="Количество"
        ref={amountInputRef}
        input={{ id: id, type: "number", min: 1, step: 1, defaultValue: 1 }}
      />
      <button>Добавить</button>
      {!amountIsValid && <p>Введите количество от 1 до 10</p>}
    </form>
  );
};

export default MealItemForm;
