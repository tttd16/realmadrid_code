import React from 'react';
import { Card, Col, Image, Button } from 'react-bootstrap';

import BACKGROUND from '~/assets/imgs/tickets/fondoEntradasFutbol.jpg';

const HeadTicket = () => {
  return (
    <Card className="bg-dark text-white rounded-0">
      <Card.Img src={BACKGROUND} alt="Card image" />
      <Card.ImgOverlay className=" d-flex justify-content-center align-items-center">
        <Card style={{ width: '50%' }} className="d-flex flex-row  justify-content-between py-5 px-5">
          <Col className=" col-5 d-flex flex-row justify-content-around align-items-center">
            <Image
              fluid
              src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/valladolid_mediano.png"
            />
            <Image
              fluid
              src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/competiciones/LigaSantander.png"
            />
            <Image
              fluid
              src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png"
            />
          </Col>
          <Col className="col-5 d-flex flex-column">
            <div className="d-flex  text-danger">
              <Card.Text className="ticket__time">Time to be confirmed</Card.Text>
              <Card.Text>28-29 Jan</Card.Text>
            </div>
            <div>
              <Card.Text className="text-dark">Real Madrid - Real Sociedad</Card.Text>
            </div>
            <div>
              <p className="text-secondary">
                <span>Matchday 19</span>
                <br />
                Santiago Bernabéu{' '}
              </p>
            </div>
            <Button className="px-2 py-2 rounded-3 text-uppercase" variant="primary" size="sm">
              Buy Hospitality tickets
            </Button>{' '}
            <div className="text-center pt-2">
              <span className="text-secondary">
                VIP from <strong> 295</strong> <span>€</span>{' '}
              </span>
            </div>
          </Col>
        </Card>
      </Card.ImgOverlay>
    </Card>
  );
};

export default HeadTicket;
