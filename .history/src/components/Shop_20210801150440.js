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
    console.log(things.data);

    setItems(things.data); //.data
  };
  console.log(items[4]);
  return (
    <div>
      {items.map((card) => {
        return (
          <h1 key={card.itemId}>
            <Link to={`/shop/${card.itemId}`}>{card.item.name}</Link>
          </h1>
        );
      })}
    </div>
  );
};
export default Shop;
