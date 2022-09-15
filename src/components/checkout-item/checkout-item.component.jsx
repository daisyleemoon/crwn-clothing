import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  deleteItem,
  decreaseOrRemoveItem,
} from "../../store/cart/cart.action";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  // const { deleteItem, addItemToCart, decreaseOrRemoveItem } =
  //   useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const deleteItemHandler = () => dispatch(deleteItem(cartItems, cartItem));
  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const decreaseOrRemoveItemHandler = () =>
    dispatch(decreaseOrRemoveItem(cartItems, cartItem));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseOrRemoveItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
