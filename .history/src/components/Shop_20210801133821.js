import React, { useState, useEffect } from "react";

const Shop = (props) => {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    console.log(items);
  };
  return (
    <div>
      <p>I am Shop page</p>
    </div>
  );
};
export default Shop;
