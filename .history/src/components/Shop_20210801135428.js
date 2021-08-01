import React, { useState, useEffect } from "react";

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
    console.log(things.data[0]);

    setItems(things.data);
  };
  return (
    <div>
      {items.map((item) => (
        <h1 key={item.itemId}>{item.item.name}</h1>
      ))}
    </div>
  );
};
export default Shop;
