import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({ match }) => {
  console.log(match.params.id);
  useEffect(() => {
    fetchItem();
  }, []);
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const itemFetched = await fetchItem.json();
    setItem(itemFetched.data.item);
  };
  console.log(itm);
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.background} />
    </div>
  );
};
export default ItemDetail;
