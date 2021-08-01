import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({ match }) => {
  const [item, setItem] = useState({});
  console.log(match);
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log(item);
  };
  return <div>Item</div>;
};
export default ItemDetail;
