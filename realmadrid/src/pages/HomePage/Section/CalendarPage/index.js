import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

import Calendar from '../Calendar';

const CalendarPage = () => {
  return (
    <Container className="">
      <Row className="pt-4">
        <Card.Title className="under__title text-shadow text-center text-uppercase fs-2">Calendar</Card.Title>
        <Card.Text className=" float-end text-end fw-light">
          See the whole calendar <i class="fa-sharp fa-solid fa-arrow-right"></i>
        </Card.Text>
      </Row>
      <Row className=" align-self-center justify-content-around p-3">
        <Col className="p-3" xxl={3} xl={3} lg={4} md={6} sm={12} xs={12}>
          <Calendar fluid />
        </Col>
        <Col className="p-3" xxl={3} xl={3} lg={4} md={6} sm={12} xs={12}>
          <Calendar fluid />
        </Col>
        <Col className="p-3" xxl={3} xl={3} lg={4} md={6} sm={12} xs={12}>
          <Calendar fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default CalendarPage;
