import React from 'react';
import { Card } from 'react-bootstrap';

const Calendar = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body className="text-primary d-flex justify-content-evenly">
        <Card.Title>DEC 30 - 31</Card.Title>
        <Card.Title>9:30 pm</Card.Title>
      </Card.Body>
      <Card.Body className=" d-flex justify-content-between align-items-center">
        <Card.Img
          style={{ width: '68px', height: 'auto' }}
          src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/valladolid_mediano.png"
        />
        <Card.Img
          style={{ width: '40px', height: 'auto' }}
          src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/competiciones/LigaSantander.png"
        />
        <Card.Img
          style={{ width: '68px', height: 'auto' }}
          width="68px"
          src="https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png"
        />
      </Card.Body>
      <Card.Body className="text-center text-capitalize">
        <Card.Body className="p-0">
          <Card.Text>Real Valladolid</Card.Text>
          <Card.Text>real Madrid</Card.Text>
        </Card.Body>
        <Card.Text>Jose Zorrilla Stadium Dazn</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Calendar;
