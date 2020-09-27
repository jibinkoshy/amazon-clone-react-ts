import React from 'react';
import './Home.css';
import Product from './Product';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="
          https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Disney Frozen Singing Anna Fashion Doll with Music Wearing A Purple Dress Inspired by 2, Toy for Kids 3 Years & Up"
            price={20.0}
            image="https://m.media-amazon.com/images/I/41MCNsUVaDL._AC_SR250,230_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="New Apple Watch Series 6 (GPS + Cellular, 40mm) - (Product) RED - Aluminum Case with (Product) RED﻿ - Sport Band"
            price={499.0}
            image="https://m.media-amazon.com/images/I/81iqHdhp4wL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Apple Smart Keyboard Folio (for 12.9-inch iPad Pro - 4th Generation) - US English"
            price={189.99}
            image="https://m.media-amazon.com/images/I/615LSep2qnL._AC_UL320_.jpg"
            rating={4}
          />

          <Product
            id="4"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={3}
          />

          <Product
            id="5"
            title="UKEY Mechanical Gaming Keyboard with Customizable RGB Backlight & Linear Red Switches, 104-Key Anti-Ghosting Wired Keyboard with Surround Lighting, Steel Body for PC and Laptop"
            price={54.99}
            image="https://m.media-amazon.com/images/I/61pQ-ucHrrL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail (Management of Innovation and Change)"
            price={89.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Ngk5BJi1L._SX331_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
