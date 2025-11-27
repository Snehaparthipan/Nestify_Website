import React, { useEffect, useState } from "react";

import Footer from './Footer'

export default function Dinningroom() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);


  return (
    <>
      <div className="topBannerImage">
        <img
          src="https://i.postimg.cc/43vxcxZn/din-hero-(2).jpg"
          alt=""
          style={{ width: "100%", height: "610px" }}
        />
        <div className="topBannerTextBox">
          <h1>
            Dining Room Designs <br />
            That Fit Your Modern Lifestyle
          </h1>
        </div>
      </div>

      <div className="islandShowcase">
        <div className="islandImgGroup">
          <img
            src="https://i.postimg.cc/43vxcxZn/din-hero-(2).jpg"
            alt="Island 1"
          />
          <img
            src="https://i.postimg.cc/43vxcxZn/din-hero-(2).jpg"
            alt="Island 2"
          />
        </div>

        <div className="islandInfoBox">
          <h2>Bar counters</h2>
          <p>
            Most of the modern houses have a bar counter unit assembled at the
            dining room itself. It not only serves as a bar counter unit, but
            also acts as a prestigious decorative unit too. Avail the bar
            counter units to be assembled anywhere in India from NESTIFY Home
            Interiors.
          </p>

           <button className="viewMoreBtn"><Link className="view" to="/Viewmore">view More</Link></button>
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandInfoBox">
          <h2>Crockery Shelf</h2>
          <p>
            A crockery shelf enables you to arrange your crockery items in a
            prestigious way. Dining rooms will be beautified when you have a
            customized crockery shelf in it. Choose from the wide range of
            crockery shelf designs from NESTIFY.
          </p>

           <button className="viewMoreBtn"><Link className="view" to="/Viewmore">view More</Link></button>
        </div>
        <div className="islandImgGroup">
          <img
            src="https://i.postimg.cc/43vxcxZn/din-hero-(2).jpg"
            alt="Island 1"
          />
          <img
            src="https://i.postimg.cc/43vxcxZn/din-hero-(2).jpg"
            alt="Island 2"
          />
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandImgGroup">
          <img
            src="https://i.postimg.cc/43vxcxZn/din-hero-(2).jpg"
            alt="Island 1"
          />
          <img
            src="https://i.postimg.cc/43vxcxZn/din-hero-(2).jpg"
            alt="Island 2"
          />
        </div>

        <div className="islandInfoBox">
          <h2>Dining Table</h2>
          <p>
            As the dining table is a prominent piece of furniture for the daily
            use of family members, its style and durability is a matter of
            concern for all. NESTIFY makes suitable dining tables as part of
            home interior projects undertaken. Most modern styles can be
            integrated into the durable materials of laminated hardwood fiber
            board and glass.
          </p>

           <button className="viewMoreBtn"><Link className="view" to="/Viewmore">view More</Link></button>
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandInfoBox">
          <h2>Wash</h2>
          <p>
            A wash counter is an inevitable part of a dining room and when you
            can get it customized as per your needs and requirements it seems to
            be much more interesting. Make a wash counter unit that fits your
            space and keep your head straight while the guest arrives.
          </p>

           <button className="viewMoreBtn"><Link className="view" to="/Viewmore">view More</Link></button>
        </div>
        <div className="islandImgGroup">
          <img
            src="https://i.postimg.cc/43vxcxZn/din-hero-(2).jpg"
            alt="Island 1"
          />
          <img
            src="https://i.postimg.cc/43vxcxZn/din-hero-(2).jpg"
            alt="Island 2"
          />
        </div>
      </div>
      <Footer />
    </>
  );
    
  
}
