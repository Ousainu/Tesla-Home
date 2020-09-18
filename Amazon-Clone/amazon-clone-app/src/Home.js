import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWJkMjYwNzAt/MWJkMjYwNzAt-NGVmZmRlNjEt-w3000._CB405404421_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="49538094"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="12321341"
            title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)"
            price={118.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY218_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12729311"
            title="GTRACING Gaming Chair Racing Office Computer Game Chair Ergonomic Backrest and Seat Height Adjustment Recliner Swivel Rocker with Headrest and Lumbar Pillow E-Sports Chair Red"
            price={159.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/619rXonITKL._AC_SY879_.jpg"
          />
          <Product
            id="22325343"
            title="Fire TV Stick 4K streaming device with Alexa built in, Dolby Vision, includes Alexa Voice Remote, latest release"
            price={49.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51CgKGfMelL._AC_UY218_.jpg"
          />
          <Product
            id="92381645"
            title="Echo Studio - High-fidelity smart speaker with 3D audio and Alexa"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/613HESgMbAL._AC_UY218_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="45227392"
            title="Sony a7 III ILCE7M3/B Full-Frame Mirrorless Interchangeable-Lens Camera with 3-Inch LCD, Black"
            price={1998.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81zewshg2eL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
