import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Slider from 'react-slick';

import ImgTrophies from '~/datas/ImgTrophies';

const TrophiesPage = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'black' }} onClick={onClick} />;
  }

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };

  return (
    <Container className="">
      <Card.Title className="under__title text-center pt-4 fs-2">REAL MADRID TROPHIES</Card.Title>
      <Slider {...settings}>
        {ImgTrophies.map((item, index) => {
          return (
            <Card className=" border border-0 pt-4" key={index}>
              <Card.Img className="" variant="bottom" src={item.image} alt={item.alt} />
              <Card.Body className="text-center">
                <Card.Title className="fs-2 fw-bold text-primary">{item.number}</Card.Title>
                <Card.Text className="text-uppercase fw-light">{item.title}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    </Container>
  );
};

export default TrophiesPage;
