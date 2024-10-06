import React from "react";
import { useSelector } from "react-redux";
import phoneImage from "./assets/images/phone.jpg";
import laptopImage from "./assets/images/laptop.jpg";
import headphonesImage from "./assets/images/headphones.jpg";
import cameraImage from "./assets/images/camera.jpg";
import smartwatchImage from "./assets/images/smartwatch.jpg";
import tabletImage from "./assets/images/tablet.jpg";
import speakerImage from "./assets/images/speaker.jpg";
import consoleImage from "./assets/images/console.jpg";
import trackerImage from "./assets/images/tracker.jpg";


function Cart() {
  const cart = useSelector((state) => state.products.cart); // Get cart items from Redux state

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  
    const getImage = (productName) => {
      switch (productName) {
        case "Phone":
          return phoneImage;
        case "Laptop":
          return laptopImage;
        case "Headphones":
          return headphonesImage;
        case "Camera":
          return cameraImage;
        case "Smartwatch":
          return smartwatchImage;
        case "Tablet":
          return tabletImage;
        case "Bluetooth Speaker":
          return speakerImage;
        case "Gaming Console":
          return consoleImage;
        case "Fitness Tracker":
          return trackerImage;
        default:
          return null;
      }
    };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <>
          <ul className="product-container">
            {cart.map((product) => (
              <li key={product.id} className="product-item">
                <img
                  src={getImage(product.name)}
                  alt={product.name}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice}</h2>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
