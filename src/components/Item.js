import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
