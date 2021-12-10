import React from "react";
import { Container, Carousel } from "react-bootstrap";
import slide1 from "../../assets/images/Slide1.JPG";
import slide2 from "../../assets/images/Slide2.JPG";
import slide3 from "../../assets/images/Slide3.JPG";

const Banner = () => {
  return (
    <Container fluid className="p-0">
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
