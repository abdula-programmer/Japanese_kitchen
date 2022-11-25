import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Layout";
import Meals from "./components/Meals";
import CartContextProvider from './store/CartContextProvider';
import СartContext from "./store/Cart-context";

const App = () => {
  const [cartIsVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };

  return (
    <CartContextProvider value={СartContext}>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
};

export default App;
