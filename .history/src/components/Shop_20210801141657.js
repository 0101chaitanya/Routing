import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Shop = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const things = await data.json();

    setItems(things.data);
  };
  return (
    <div>
      {items.map((item) => (
        <h1 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
};
export default Shop;
