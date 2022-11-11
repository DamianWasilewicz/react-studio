import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, addCartItem] = useState({});
  
  const [cartTotal, addToCartTotal] = useState(0);
  
  const addToCart = (item) => {
    debugger;
    addToCartTotal(cartTotal + item.price);
    const newCart = {...cartItems}
    newCart[item.name] = (newCart[item.name] || 0) + 1;
    addCartItem(newCart);
  }
  
  return (
    <div className="App">
    
    <div >
    <h1>Pretty Cool Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
    {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
    <BakeryItem item={item} key={index} onClick={addToCart}/> // replace with BakeryItem component
    ))}
    
    </div>
    
    <div>
    <h2>Cart</h2>
    {/* TODO: render a list of items in the cart */}
    {Object.keys(cartItems).map((key, value) => (
      <li key={key}> {key} * {cartItems[key]} </li>
    ))}

      
      <p>Cart Total: {cartTotal}</p>
      </div>
      
      </div>
      );
    }
    
    export default App;
    