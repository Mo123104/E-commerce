import React from 'react';
import { useSelector } from 'react-redux';
import phoneImage from './assets/images/phone.jpg';       
import laptopImage from './assets/images/laptop.jpg';
import headphonesImage from './assets/images/headphones.jpg';
import cameraImage from './assets/images/camera.jpg';
import smartwatchImage from './assets/images/smartwatch.jpg';
import tabletImage from './assets/images/tablet.jpg';
import speakerImage from './assets/images/speaker.jpg';
import consoleImage from './assets/images/console.jpg';
import trackerImage from './assets/images/tracker.jpg';
import { Link } from 'react-router-dom';

const getImage = (productName) => {
  switch (productName) {
   case 'Phone':
      return phoneImage;
    case 'Laptop':
      return laptopImage;
    case 'Headphones':
      return headphonesImage;
    case 'Camera':
      return cameraImage;
    case 'Smartwatch':
      return smartwatchImage;
    case 'Tablet':
      return tabletImage;
    case 'Bluetooth Speaker':
      return speakerImage;
    case 'Gaming Console':
      return consoleImage;
    case 'Fitness Tracker':
      return trackerImage;
    default:
      return null;
  }
};

function ProductList() {
  const products = useSelector((state) => state.products.products);

  return (
    <div>
      <h1>All Products</h1>
      <ul className='product-container'>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/products/${product.id}`}>
              <img
                src={getImage(product.name)}
                alt={product.name}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
