import { CART_ACTION_TYPES } from "./cart.types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartRemoveItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartRemoveItem.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartRemoveItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartRemoveItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const removeItem = (cartItems, itemToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const decreaseOrRemoveItem = (cartItems, cartRemoveItem) => {
  const newCartItems = removeCartItem(cartItems, cartRemoveItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const deleteItem = (cartItems, itemToDelete) => {
  const newCartItems = removeItem(cartItems, itemToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearAllItem = () => {
  const newCartItems = [];
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
