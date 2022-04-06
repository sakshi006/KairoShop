import React from "react";
import { Link } from "react-router-dom";
import { homePageGeneral } from "../../Assets/HomePageData/HomePageGeneral";

import "./Home.css";
import headerImg1 from "../../Assets/head2.jpg";
import HorizontalCard from "../../Components/HorizontalCard/HorizontalCard";
import { useCategory } from "../../context/categoryContext";

export const Home = () => {
  const { category } = useCategory();

  return (
    <div className="content">
      <div className="main-slider">
        <img
          src={headerImg1}
          alt="main-slider"
          className="hero-img responsive main-slider-img"
        />
        <div className="centered-head">
          <h1 className="hero-text">
            Listen to audiobooks, podcasts, Kairo Originals and more
          </h1>
          <Link to="/productlist">
            <button className="show-products">
              <strong>Show Products</strong>
            </button>
          </Link>
        </div>
      </div>

      <section className="bottom-section">
        {category.map((item) => {
          return <HorizontalCard key={item._id} item={item} />;
        })}
      </section>
      <div className="home-footer">
        {homePageGeneral.map((item) => (
          <div key={item.name}>
            <img src={item.img} alt="free-trial" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
