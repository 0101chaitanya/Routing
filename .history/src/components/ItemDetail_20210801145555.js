import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({ match }) => {
  const [thing, setThing] = useState({});
  console.log(match.params.id);
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id={{${match.params.id}}}`
    );
    const item = await fetchItem.json();
    console.log(item.data);
    setThing(item.data);
  };
  return <div> {/* {thing.item.name} */} </div>;
};
export default ItemDetail;
