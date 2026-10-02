import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Ratings are currently maintained on the frontend.
  const ratings = {
    1: 4.5,
    2: 4.6,
    3: 4.4,
    4: 4.3,
    5: 4.7,
    6: 4.5,
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError("");
      setProduct(null);

      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${id}`
        );

        if (response.status === 404) {
          throw new Error("Product not found.");
        }

        if (!response.ok) {
          throw new Error("Failed to load product details.");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(
          err.message || "Could not connect to the backend."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return (
      <div className="product-not-found">
        <h1>Unable to Load Product</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  const rating = ratings[product.id] ?? 4.5;
  const inStock = product.stock > 0;

  return (
    <div className="product-details-page">
      <div className="product-details-card">
        <div className="details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="details-content">
          <h1>{product.name}</h1>

          <div className="rating">
            ⭐ {rating} / 5
          </div>

          <p className="details-description">
            {product.description}
          </p>

          <h2 className="details-price">
            ₹{product.price.toLocaleString("en-IN")}
          </h2>

          <p className="stock">
            {inStock ? "🟢 In Stock" : "🔴 Out of Stock"}
          </p>

          <button
            className="details-cart-button"
            onClick={() => addToCart(product)}
            disabled={!inStock}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;