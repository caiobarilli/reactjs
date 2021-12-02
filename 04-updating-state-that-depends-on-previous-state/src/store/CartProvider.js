import { useReducer } from "react";

import CardContext from "./cart-context.js";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const extCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const extCartItem = state.items[extCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (extCartItem) {
      updatedItem = {
        ...extCartItem,
        amount: extCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[extCartItemIndex] = updatedItem;
    } else {
      updatedItem = [...state.items];
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const extCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const extItem = state.items[extCartItemIndex];
    const updatedTotalAmount = state.totalAmount - extItem.price;

    let updatedItems;

    if (extItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...extItem, amount: extItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[extCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemCartHandle = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemCartHandle = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandle,
    removeItem: removeItemCartHandle,
  };

  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;
