import "./Cart.css";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <p>Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <div className="cart-item-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="cart-item-details">

                <h2>{item.name}</h2>

                <p>{item.description}</p>

                <h3>
                  ₹{item.price.toLocaleString("en-IN")}
                </h3>

                <div className="quantity-controls">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>

        <div className="cart-summary">

          <h2>Cart Summary</h2>

          <p>
            Total Items:{" "}
            {cart.reduce(
              (total, item) => total + item.quantity,
              0
            )}
          </p>

          <h2>
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </h2>

          <button className="checkout-button">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Cart;