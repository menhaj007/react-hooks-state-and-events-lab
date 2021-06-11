import React, {useState} from "react";

function Item({ name, category }) {
  const [toCard, setToCard] = useState("");

  return (
    <li className={toCard}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setToCard("in-cart")}>Add to Cart</button>
    </li>
  );
}

export default Item;
