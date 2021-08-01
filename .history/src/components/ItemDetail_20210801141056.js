import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ItemDetail = (props) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=d28992b9-6838-4390-b6b5-b703d77799b1`
    );
    const item = await fetchItem.json();
    console.log(item);
  };
  return <div>Item</div>;
};
export default ItemDetail;
