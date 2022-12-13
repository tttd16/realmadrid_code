import { React, Fragment } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import ImgSponsors from '~/datas/ImgSponsors';

const Footer = () => {
  return (
    <Fragment>
      <div className="footer__1 text-center">
        <Card.Title className="footer__1--title under__title text-uppercase pt-4 pb-2 fs-2">sponsors</Card.Title>

        <div className="row__footer">
          <Row className="justify-content-center g-2  ">
            {ImgSponsors.map((item, index) => {
              return (
                <Col className="col-3 p-1" key={index}>
                  <Image width="70" height="60" src={item.image} alt={item.alt} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <Container className="pt-4 text-center footer__2 text-break">
        <Row>
          <Col classname="text-center col-5">
            <Card.Text className="under__title text-uppercase fs-2">follow us</Card.Text>
            <div className="d-flex justify-content-center fs-2">
              <p className="ms-2">
                <i class="footer__icon fa-brands fa-facebook"></i>
              </p>
              <p className="ms-2">
                <i class="footer__icon fa-brands fa-instagram"></i>
              </p>
              <p className="ms-2">
                <i class="footer__icon fa-brands fa-twitter"></i>
              </p>
              <p className="ms-2">
                <i class="footer__icon fa-brands fa-youtube"></i>
              </p>
              <p className="ms-2">
                <i class="footer__icon fa-brands fa-twitch"></i>
              </p>
              <p className="ms-2">
                <i class="footer__icon fa-brands fa-snapchat"></i>
              </p>
            </div>
          </Col>
          <Col className="col-4"></Col>
          <Col classname="text-center col-3">
            <Card.Text className="under__title text-uppercase fs-2">real madrid app</Card.Text>
            <div className="d-flex justify-content-center fs-2">
              <p className="ms-2">
                {' '}
                <i class="footer__icon fa-brands fa-app-store-ios"></i>
              </p>
              <p className="ms-2">
                <i class="footer__icon fa-brands fa-google-play"></i>
              </p>
            </div>
          </Col>
          <Card.Text className=" text-capitalize py-4">Real Madrid © 2022 All rights reserved</Card.Text>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Footer;
