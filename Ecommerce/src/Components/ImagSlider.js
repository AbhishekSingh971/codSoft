import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings} style={{marginBottom: "25px"}}>
      <Wrap>
        <a href="/" rel="">
          <img src="/images/headphones.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/" rel="">
          <img src="/images/4.webp" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/" rel="">
          <img src="/images/boat1.webp" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/" rel="">
          <img src="/images/5.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-left: 60px;
  margin-right: 60px;
  position: relative;

  & > button {
    opacity: 0;
    padding-right: 3%;
    padding-left: 3%;
    height: 100%;
    position: absolute;
    width: 1vw;
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
    font-size: 13px;
    border-radius: 50px;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -90px;
  }
  
  .slick-next {
    right: -70px;
  }
`;

const Wrap = styled.div`
  border-radius: 2px;
  cursor: pointer;

  a {
    margin-top: 10px;
    width: auto;
    height: 500px;
    box-shadow: rgb(249 249 249 / 69%) 0px 2px 20px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    padding: 4px;
    border-radius: 10px;
    overflow: hidden;
    transition: 400ms ease-in-out;
    
    img {
      width: 100%;
      height: 100%;
      transition: 400ms ease-in-out;

      &:hover{
       transform: scale(1.1, 1.1)
      }
    }

    &:hover {
      padding: 0;
      transform: scale(1,1.02);
      border: 4px solid rgba(0, 0, 0,0.8);
      transition-duration: 300ms;
      box-shadow: 0px 0px 8px 0px #f9f9f9;
    }
  }
`;

export default ImgSlider;
