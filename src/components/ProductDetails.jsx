import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";
import phoneImage from "./assets/images/phone.jpg";
import laptopImage from "./assets/images/laptop.jpg";
import headphonesImage from "./assets/images/headphones.jpg";
import cameraImage from "./assets/images/camera.jpg";
import smartwatchImage from "./assets/images/smartwatch.jpg";
import tabletImage from "./assets/images/tablet.jpg";
import speakerImage from "./assets/images/speaker.jpg";
import consoleImage from "./assets/images/console.jpg";
import trackerImage from "./assets/images/tracker.jpg";

function ProductDetails() {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );
  const dispatch = useDispatch();

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
      {product ? (
        <>
          <h1>{product.name}</h1>
          <img
            src={getImage(product.name)}
            alt={product.name}
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </>
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
}

export default ProductDetails;
