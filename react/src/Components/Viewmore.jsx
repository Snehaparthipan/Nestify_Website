import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import { Link } from "react-router-dom";

export default function IslandKitchen() {
  const [kitchens, setKitchens] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const data = [
      { name: "Kitchen", img: "https://i.postimg.cc/ZRyzm44K/island2.jpg" },
      { name: "Kitchen", img: "https://i.postimg.cc/ZRyzm44K/island2.jpg" },
      { name: "Kitchen", img: "https://i.postimg.cc/ZRyzm44K/island2.jpg" },
      { name: "Kitchen", img: "https://i.postimg.cc/ZRyzm44K/island2.jpg" },
    ];
    setKitchens(data);
  }, []);

  const handleAdd = (item) => {
    addToCart(item); 
    alert("Added to Cart!");
  };

  return (
    <div className="island-container" >
      <h1 className="title">Island Kitchen</h1>

      <p className="description">
        Kitchens should be elegant looking as well as serve our purpose of
        storage, convenient cooking, and comfortable living. Below are some
        island kitchen models displayed for inspiration.
      </p>

      <div className="kitchen-grid">
        {kitchens.map((item, index) => (
          <div key={index} className="kitchen-card">
            <img src={item.img} className="kitchen-img" />

            <div className="kitchen-name">{item.name}</div>

            <button className="add-btn" onClick={() => handleAdd(item)}>
              Add Design
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}




