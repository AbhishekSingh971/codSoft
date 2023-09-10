import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoriesSlider = (props) => {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  const categories = useCategory();

  return (
    <Carousel {...settings} style={{marginBottom: "50px"}}>
       {categories.map((c) => (
      <Wrap key={c._id}>
        <Link to={`/categories/category/${c.slug}`}>
          <div className="categoriesSlider">
            <div className="slider-text">
              {c.name}
            </div>
          </div>
        </Link>
      </Wrap>
       ))}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
position: relative;
margin-left: 50px;
margin-right: 50px;

& > button {
  opacity: 0;
  padding-right: 2%;
  padding-left: 1%;
  height: 90%;
  position: absolute;
  width: 10px;
  z-index: 1;
  
  &:hover {
  opacity: 1;
  top: 50%;
  transition: opacity 0.2s ease 0;
  }
}

  ul li button {
    &:before {
      font-size: 11px;
      color: rgb(158, 158, 171);
    }
  }

  li.slick-active button:before {
    color: yellow;
    font-size: 14px;
    border-radius: 40px;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -50px;
    z-index: 2;
  }
  
  .slick-next {
    right: -50px;
    z-index: 2;
  }
`;

const Wrap = styled.div`
  border-radius: 2px;
  cursor: pointer;

  a {
    text-align: center;
    margin-top: 30px;
    width: 280px;
    height: 150px;
    cursor: pointer;
    display: block;
    padding: 4px;
    border-radius: 10px;
    overflow: hidden;
    transition: 400ms ease-in-out;
    background-color: #566D7E;
    color: black;
    text-decoration: none;
    font-weight : bold;

    &:hover {
      padding: 0;
      transform: scale(1,1.1);
      border: 2px solid rgba(0, 0, 0,0.8);
      transition-duration: 300ms;
      box-shadow: 10px 10px 9px -9px #f9f9f9;
      
    }
  }
`;

export default CategoriesSlider;
