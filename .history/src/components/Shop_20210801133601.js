import React, { useState, useEffect } from "react";

const Shop = (props) => {
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
  };
  return (
    <div>
      <p>I am Shop page</p>
    </div>
  );
};
export default Shop;
