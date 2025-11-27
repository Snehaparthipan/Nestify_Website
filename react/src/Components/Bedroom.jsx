import React, { useEffect, useState } from "react";
import Footer from "./Footer";


export default function Bedroom() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);


  return (
    <>
      <div className="topBannerImage">
        <img
          src="https://i.postimg.cc/tgqg91MQ/bed-hero.jpg"
          alt=""
          style={{ width: "100%", height: "610px" }}
        />
        <div className="topBannerTextBox">
          <h1>
            Customized Bedroom <br />
            For Your Dream Home
          </h1>
        </div>
      </div>

      <div className="islandShowcase">
        <div className="islandImgGroup">
          <img src="https://i.postimg.cc/tgqg91MQ/bed-hero.jpg" alt="" />
          <img src="https://i.postimg.cc/tgqg91MQ/bed-hero.jpg" alt="" />
        </div>

        <div className="islandInfoBox">
          <h2>Bed</h2>
          <p>
            Relax with custom-made ideas of cots from NESTIFY. Bedroom beauty
            depends mainly on how the cot is built and arranged, supported by
            lighting, and side tables. Choose from the wide range of styles and
            colour options available in your desired design. A neat storage,
            peace of mind style and comfort can be expected when it designed as
            required.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandInfoBox">
          <h2>Dressing Unit</h2>
          <p>
            Dressing units are an essential part of the bedroom interior, it
            often comes integrated into the wardrobes. NESTIFY offers you the
            choice to build as per your requirements in custom style and
            measurements. Customers can get the dressing table as per your
            requirements anywhere in India as part of your bedroom interior.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
        <div className="islandImgGroup">
          <img src="https://i.postimg.cc/tgqg91MQ/bed-hero.jpg" alt="" />
          <img src="https://i.postimg.cc/tgqg91MQ/bed-hero.jpg" alt="" />
        </div>
      </div>
      <div className="islandShowcase">
        <div className="islandImgGroup">
          <img src="https://i.postimg.cc/tgqg91MQ/bed-hero.jpg" alt=" " />
          <img src="https://i.postimg.cc/tgqg91MQ/bed-hero.jpg" alt="" />
        </div>

        <div className="islandInfoBox">
          <h2>Wardrobe</h2>
          <p>
            Classy and trendy wardrobes transform a bedroom in addition to give
            ample storage facilities. Where it fits better and what should be
            the size is often a matter to be discussed with a designer and
            decide. Next is the choice of color and finish to match with the
            theme of the bedroom.
          </p>

          <button className="viewMoreBtn">view More</button>
        </div>
      </div>
        <Footer />

    </>
  );
   
  
}
