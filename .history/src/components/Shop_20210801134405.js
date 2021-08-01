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
    const items = await data.json();
    console.log(items);
  };
  setItems(items);
  return (
    <div>
      {items.map((item) => {
        <h1>{item.name}</h1>;
      })}
    </div>
  );
};
export default Shop;
