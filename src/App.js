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

  // const [index, setIndex] = useState(0);
  // function handleClick() {
  //   setIndex(index + 1);
  // }

  const [cart, setCart] = useState([]);
  const [cartTotal, setTotal] = useState(0);

  const addToCart = (item) => {
    console.log("addToCart");
    console.log("cart", cart);
    setCart([...cart, item]);
    setTotal(item.price + cartTotal);
  }



  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        <BakeryItem item={item} prop2={index} updateCart={addToCart}/>

      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <p>{cart.map((item) => {
          return <p> {item.name}</p>
        })}</p>
        Total: {cartTotal}
      </div>
    </div>
  );
}

export default App;
