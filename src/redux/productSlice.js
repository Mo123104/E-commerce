import { createSlice } from "@reduxjs/toolkit";

/**
 * 
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
 */

const initialState = {
  products: [
    {
      id: 1,
      name: "Phone",
      price: 799,
      description:
        "Latest smartphone with high-resolution display and fast processor",
      image: "phone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: 1200,
      description: "Lightweight laptop with a powerful CPU and 16GB RAM",
      image: "laptop.jpg",
    },
    {
      id: 3,
      name: "Headphones",
      price: 1200,
      description: "Wireless headphones with high-quality audio",
      image: "headphones.jpg",
    },
    {
      id: 4,
      name: "Camera",
      price: 1200,
      description: "High-quality camera with advanced features",
      image: "camera.jpg",
    },
    {
      id: 5,
      name: "Smartwatch",
      price: 1200,
      description: "Fitness tracker with heart rate monitoring",
      image: "smartwatch.jpg",
    },
    {
      id: 6,
      name: "Tablet",
      price: 1200,
      description: "Compact tablet with high-resolution display",
      image: "tablet.jpg",
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      price: 1200,
      description: "Wireless speaker with Bluetooth technology",
      image: "speaker.jpg",
    },
    {
      id: 8,
      name: "Gaming Console",
      price: 1200,
      description: "Gaming console with high-performance graphics",
      image: "console.jpg",
    },
    {
      id: 9,
      name: "Fitness Tracker",
      price: 1200,
      description: "Fitness tracker with heart rate monitoring",
      image: "tracker.jpg",
    },
  ],
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addProduct, addToCart } = productSlice.actions;
export default productSlice.reducer;
