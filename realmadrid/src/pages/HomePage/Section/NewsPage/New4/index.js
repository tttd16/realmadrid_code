import React from 'react';
import { Card, Container, Image, Row, Col } from 'react-bootstrap';

import img from '~/assets/imgs/newsimg/_HE00315Thumb.jpg';
import new1 from '~/assets/imgs/newsimg/new1.jpg';

const New4 = () => {
  return (
    <Container className="d-flex flex-column align-items-center mb-5">
      <Image fluid src={img} alt="Madridistas en el Mundial" />
      <div className="d-flex flex-column align-items-center ">
        <Card.Title className="wrapper__content text-primary fs-1 py-5">
          Schedules and results of the Real Madrid players at the World Cup
        </Card.Title>
      </div>
      <div className="wrapper__content">
        <Row className="justify-content-between">
          <Col className="col-6">
            <Card.Text>NEWS STORY. 01/12/2022</Card.Text>
            <Card.Title>
              Carvajal, Asensio, Camavinga, Tchouameni, Modrić, Vini Jr, Rodrygo and Militão to play final 16..
            </Card.Title>
            <Card.Text className="fs-5">
              The following Real Madrid players have been called up to represent their national teams at the Qatar 2022
              World Cup: <strong>Carvajal</strong> and <strong> Asensio </strong> for Spain; <strong>Camavinga</strong>{' '}
              <strong> Tchouameni </strong>for France;<strong>Modrić</strong> for Croatia; <strong>Courtois</strong>and
              <strong>Hazard</strong> for Belgium; <strong>Rüdiger</strong> for Germany;{' '}
              <strong>Vini Jr., Rodrygo </strong> and <strong> Militão </strong>for Brazil; and{' '}
              <strong>Valverde</strong> for Uruguay. Up until now, <strong>Camavinga</strong>,
              <strong>Tchouameni </strong>and<strong>Modrić </strong>have managed to qualify for the round of 16.
              <br />
              <br />
              <u>
                <strong>Group stage</strong>
              </u>
              <br />
              Spain-Costa Rica (7-0)
              <br />
              Spain-Germany (1-1)
              <br />
              Japan-Spain (2-1)
            </Card.Text>
          </Col>
          <Col className="col-4">
            <Image src={new1} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default New4;
