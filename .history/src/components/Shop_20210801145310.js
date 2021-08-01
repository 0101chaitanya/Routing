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
    console.log(things);
    setItems(things.data); //.data
  };
    {console.log(items[0].itemId, items[0].item.name) 
  return (

    <div>
      {items.map((obj) => (
        <h1 key={obj.itemId}>
          <Link to={`/shop/${obj.itemId}`}>
             obj.item.name}
          </Link>
        </h1>
      ))}
    </div>
  );
};
export default Shop;
