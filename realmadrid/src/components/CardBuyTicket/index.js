import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';

const CardBuyTicket = () => {
  return (
    <Container>
      <Card className="d-flex flex-row align-items-center justify-content-evenly my-3">
        <Card.Body>
          <Image
            fluid
            style={{ width: '40px', height: 'auto' }}
            src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/competiciones/LigaSantander.png"
            alt="laliga"
          />
        </Card.Body>
        <Card.Body className="right__line fw-light">
          <Card.Text>Day 19</Card.Text>
          <Card.Text>Santiago Bernabeu</Card.Text>
        </Card.Body>
        <Card.Body className="text-danger">
          <Card.Text>Time to be confirmed</Card.Text>
          <Card.Text>
            <strong>Jan 28-29</strong>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Image
            style={{ width: '48px', height: 'auto' }}
            src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png"
            alt="logo-realmadrid"
          />
          <Image
            style={{ width: '48px', height: 'auto' }}
            src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/valladolid_mediano.png"
            alt="logo-realmadrid"
          />
        </Card.Body>
        <Card.Body className="text-capitalize">
          <Card.Text>real Madrid</Card.Text>
          <Card.Text>Real society</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text>
            <strong>from €295</strong>
          </Card.Text>
        </Card.Body>
        <Card.Body className="d-grid">
          <Button className="rounded-3 text-uppercase" variant="primary" size="sm">
            Buy your VIP ticket
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardBuyTicket;
