import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const display = items.filter(item => {
    if (selectedCategory === "All") {
      return items;
    } else {
      return item.category === selectedCategory;
    }
  });

  function handleChange(text) {
    setSelectedCategory(text);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={e => handleChange(e.target.value)} value={selectedCategory}>
          <option value="All" >Filter by category </option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {display.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} setItems={setItems}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
