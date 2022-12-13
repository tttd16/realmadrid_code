import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';

import ImgPlayers from '~/datas/ImgPlayers';

const PlayerPage = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'black' }} onClick={onClick} />;
  }

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <Container className="">
      <Card.Title className="under__title text-center text-uppercase pt-4 fs-2">players</Card.Title>
      <Slider {...settings}>
        {ImgPlayers.map((item, index) => {
          return (
            <Card className="card-player border border-0 bg-light position-relative mt-4" key={index}>
              <Card.Img className="p-3" variant="bottom" src={item.image} alt={item.alt} />
              <Card.Body className="position-absolute top-0 mt-4 ps-3 p-0 text-center text-uppercase">
                <Card.Text className="fw-bold">{item.name}</Card.Text>
                <Card.Text className="fw-bold fs-4">{item.number}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    </Container>
  );
};

export default PlayerPage;
