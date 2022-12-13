import React from 'react';
import { Card, Container, Nav, Row } from 'react-bootstrap';

import ImgNews from '~/datas/ImgNews';

const NewsPage = () => {
  return (
    <Container>
      <Card.Title className="under__title text-shadow text-center text-uppercase p-2 fs-2">news</Card.Title>
      <Row className="justify-content-between">
        {ImgNews.map((item) => {
          return (
            <Card className="col-5  mt-4 p-0" key={item.id}>
                <Nav.Link href={item.path}>
              <Card.Img className="p-0" variant="top" src={item.image} alt={item.alt} />
              <Card.Body>
                  <Card.Title className='new__title'>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
                </Nav.Link>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default NewsPage;
