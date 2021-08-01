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
    let x = items.data[0].item.name;
    console.log(items.data[0].item.name);
  };
  //setItems(items);
  return (
    <div>
      <h1>{x}</h1>
    </div>
  );
};
export default Shop;
