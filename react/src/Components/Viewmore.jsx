import React from "react";
import { Link } from "react-router-dom";

export default function Viewmore() {
  return (
    <div className="viewmore-container">

      <div className="header">
        <h1>More Kitchen Designs</h1>
        <p>Explore premium designs crafted for modern homes</p>
      </div>

      <div className="gallery">
        <div className="viewcard">
          <img src="https://i.postimg.cc/vTYMzbQh/island1.jpg" alt="" />
          <h3>Modern Island Kitchen</h3>
          <button  className="conbtn"><Link to='/contact' className="link">Contact</Link></button>
        </div>

        <div className="viewcard">
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="" />
          <h3>Premium Island Design</h3>
          <button  className="conbtn"><Link to='/contact' className="link">Contact</Link></button>
        </div>

        <div className="viewcard">
            <img src="https://i.postimg.cc/3N87BYKt/l-kit.jpg" alt="" />
            <h3>L Shape Kitchen</h3>
            <button  className="conbtn"><Link to='/contact' className="link">Contact</Link></button>
        </div>

        <div className="viewcard">
          <img src="https://i.postimg.cc/mkLRwBb8/l-kit1.jpg" alt="" />
          <h3>Compact L Shape Kitchen</h3>
          <button  className="conbtn"><Link to='/contact' className="link">Contact</Link></button>
        </div>

        <div className="viewcard">
          <img src="https://i.postimg.cc/SRSqrkyV/p-kit.jpg" alt="" />
          <h3>Parallel Kitchen</h3>
          <button  className="conbtn"><Link to='/contact' className="link">Contact</Link></button>
        </div>

        <div className="viewcard">
          <img src="https://i.postimg.cc/sxjycsVN/p-kit1.jpg" alt="" />
          <h3>Premium Parallel Kitchen</h3>
          <button  className="conbtn"><Link to='/contact' className="link">Contact</Link></button>
        </div>
      </div>

    </div>
  );
}
