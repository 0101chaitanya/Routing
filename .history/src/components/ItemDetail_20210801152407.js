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
    const itemFetched = await fetchItem.json();
    console.log(itemFetched.data);
    setItem(itemFetched.data);
  };
  console.log(item.name);
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.background} />
    </div>
  );
};
export default ItemDetail;
