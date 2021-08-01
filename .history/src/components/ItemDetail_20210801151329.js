import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({ match }) => {
  console.log(match.params.id);
  useEffect(() => {
    fetchItem();
  }, []);
  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  };
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.trasparent} />
    </div>
  );
};
export default ItemDetail;
