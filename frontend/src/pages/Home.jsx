import "./Home.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Home() {
  const { addToCart } = useCart();

  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone",
      price: 19999,
      image: "/images/smartphone.jpg",
      description: "Latest smartphone with powerful performance.",
    },
    {
      id: 2,
      name: "Laptop",
      price: 49999,
      image: "/images/laptop.jpg",
      description: "Powerful laptop for work and entertainment.",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2999,
      image: "/images/headphone.jpg",
      description: "Enjoy high-quality sound and comfort.",
    },
  ];

  return (
    <div className="home">

      <section className="hero">
        <div>

          <h1>Welcome to MyStore</h1>

          <p>
            Find the best products at the best prices.
          </p>

          <Link to="/products" className="shop-now-button">
            Shop Now
          </Link>

        </div>
      </section>

      <section className="products-section">

        <h2>Featured Products</h2>

        <div className="products">

          {featuredProducts.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <h3>
                ₹{product.price.toLocaleString("en-IN")}
              </h3>

              <div className="home-product-buttons">

                <Link
                  to={`/products/${product.id}`}
                  className="home-details-button"
                >
                  View Details
                </Link>

                <button
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;