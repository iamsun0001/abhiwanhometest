"use client";
import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";
import Items from "../items/Items";

const Filter = ({ items }) => {
  console.log("items before");
  console.log(items);
  console.log("items after");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <div>
        <h3>Title/Subtitle</h3>
      </div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
      {/* <Items></Items> */}
    </div>
  );
};

export default Filter;
