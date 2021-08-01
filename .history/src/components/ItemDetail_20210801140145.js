import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Shop = (props) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItem = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const things = await data.json();
    console.log(things.data[0]);

    setItems(things.data);
  };
  return <div>Item</div>;
};
export default Shop;
