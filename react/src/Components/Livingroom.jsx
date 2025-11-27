import React, { useEffect, useState } from "react";
import React from 'react'
import Footer from './Footer'

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);


  return (
    <>
      
      <div className="topBannerImage">
        <img
          src="https://i.postimg.cc/ZRyzm44K/island2.jpg"
          alt=""
          style={{ width: "100%", height: "610px" }}
        />
        <div className="topBannerTextBox">
          <h1>
            Design the Heart of Your Home <br />
            With a Kitchen That Reflects You
          </h1>
        </div>
      </div>

     

      <div className="islandShowcase">
        <div className="islandImgGroup">
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 1" />
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 2" />
        </div>

        <div className="islandInfoBox">
          <h2>Island Kitchen</h2>
          <p>
            Island kitchen series of modern designs from NESTIFY offers you a
            wide range of selections to help the customer get the best idea.
            These are different from the traditional style and towards the new
            trends.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandInfoBox">
          <h2>L Shape Kitchen</h2>
          <p>
            L-shaped kitchens from NESTIFY are 100% customized to fit the space.
            Various options are given below which can further be modified and
            made as per a design finalized.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
        <div className="islandImgGroup">
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 1" />
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 2" />
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandImgGroup">
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 1" />
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 2" />
        </div>

        <div className="islandInfoBox">
          <h2>Parallel Kitchen</h2>
          <p>
            Parallel Kitchen Parallel kitchen is the concept of making cabinets
            on both the longer sides, especially as per the suitability to the
            space measured. Our interior designer would be able to help you
            decide the shape, color, and finish by giving suggestions.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandInfoBox">
          <h2>Straight Kitchen</h2>
          <p>
            Big space can accommodate a straight kitchen with differences from
            commonly used styles. Best of the efforts are made by our team of
            interior designers to provide unique ideas and concepts in making
            modular kitchens to suit the space and match with the house.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
        <div className="islandImgGroup">
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 1" />
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 2" />
        </div>
      </div>
       <div>
      <Footer/>
    </div>
    </>
  );
}
