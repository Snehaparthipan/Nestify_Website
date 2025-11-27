import React, { useEffect, useState } from "react";
import Footer from './Footer'

export default function Livingroom() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);


  return (
    <>
      <div className="topBannerImage">
        <img
          src="https://i.postimg.cc/Wz8Zw7vF/liv-hero.jpg"
          alt=""
          style={{ width: "100%", height: "610px" }}
        />
        <div className="topBannerTextBox">
          <h1>
            Luxury Living Room <br />
            Elegantly Customized for Your Dream Home
          </h1>
        </div>
      </div>

      <div className="islandShowcase">
        <div className="islandImgGroup">
          <img
            src="https://i.postimg.cc/Wz8Zw7vF/liv-hero.jpg"
            alt="Island 1"
          />
          <img
            src="https://i.postimg.cc/Wz8Zw7vF/liv-hero.jpg"
            alt="Island 2"
          />
        </div>

        <div className="islandInfoBox">
          <h2>Center Table</h2>
          <p>
            Centre table to be kept near the sofa set for a living room is
            designed and custom-made by NESTIFY for flat or house. Customers
            choose a suitable design from available on our website or showrooms
            and customize it further to match the requirements and space
            limitations.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandInfoBox">
          <h2>LCD Display Unit</h2>
          <p>
            LCD Display Unit will be a centre of attraction in any living room
            when it is beautifully designed and made in theme matching the whole
            interiors. It can be further extended as a storage space in addition
            to display of television, music system, video player etc.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
        <div className="islandImgGroup">
          <img
            src="https://i.postimg.cc/Wz8Zw7vF/liv-hero.jpg"
            alt="Island 1"
          />
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 2" />
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandImgGroup">
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 1" />
          <img
            src="https://i.postimg.cc/Wz8Zw7vF/liv-hero.jpg"
            alt="Island 2"
          />
        </div>

        <div className="islandInfoBox">
          <h2>Prayer Unit</h2>
          <p>
            A Prayer unit may be difficult in a house or flat due to the space
            constraints. But many of our clients have the requirement of a pooja
            unit that can be fixed in a living room. Size and requirement may
            vary and thus the design. It should match with the main theme of
            living room interiors. Below are some of the patterns that we have
            created but not limited only to these.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandInfoBox">
          <h2>Sofas</h2>
          <p>
            D`LIFE can either make or buy a suitable sofa set for your living
            room as part of the interior works contract. Designers will
            recommend the options that would match the best with other parts of
            home interiors. Genuine leather, artificial leather and fabric
            styles of reputed brands are made available in our collection.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
        <div className="islandImgGroup">
          <img
            src="https://i.postimg.cc/Wz8Zw7vF/liv-hero.jpg"
            alt="Island 1"
          />
          <img src="https://i.postimg.cc/ZRyzm44K/island2.jpg" alt="Island 2" />
        </div>
      </div>

      <Footer />
    </>
  );
}
