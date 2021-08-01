import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({ match }) => {
  const [Item, setItem] = useState({});
  console.log(match);
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log(item.data.item.name);
    setItem(item);
  };
  return <div> {Item.data.item.name} </div>;
};
export default ItemDetail;
