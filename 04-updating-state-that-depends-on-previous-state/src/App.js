import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const openModal = () => {
    setCartIsShow(true);
  };
  const closeModal = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart closeCart={closeModal} />}
      <Header openCart={openModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
