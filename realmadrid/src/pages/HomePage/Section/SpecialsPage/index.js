import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';

import ImgSpecials from '~/datas/ImgSpecials';

const SpecialsPage = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Container className="">
      <Card.Title className="text-center pt-4 text-light fs-2">REALMADRID SPECIALS</Card.Title>
      <Card.Text className="text-end fw-light text-light ">
        See more specials <i class="fa-sharp fa-solid fa-arrow-right"></i>
      </Card.Text>
      <Slider {...settings}>
        {ImgSpecials.map((item, index) => {
          return (
            <div className="specials-slide p-2" key={index}>
              <Card.Img style={{height: '188px'}} width="auto" className="specials-img" src={item.image} alt={item.alt} />
              <Card.Body className="">
                <Card.Text className="text-uppercase fw-light text-light">{item.title}</Card.Text>
              </Card.Body>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default SpecialsPage;
