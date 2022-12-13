import { Radio } from '@chakra-ui/react';
import React from 'react';
import { Card, Row, Col, Container, Image, Button } from 'react-bootstrap';

import video from '~/assets/videos/pagevip/videopagevip.mp4';
import Imgbasketball from '~/assets/imgs/tickets/VIP basketball.jpg';
import Imgparty from '~/assets/imgs/tickets/Vip party.jpg';
import Imgseason from '~/assets/imgs/tickets/Vip season.jpg';

const VipPage = () => {
  return (
    <div>
      <div className="video-vip">
        <video
          style={{ width: 'auto', height: '100%', minWidth: '100%', minHeight: '100%' }}
          muted
          loop
          playsInline
          autoPlay
        >
          <source src={video} type="video/mp4" />
        </video>
        <Card.ImgOverlay className=" d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="text-uppercase text-white fs-1">vip area</Card.Title>
          <Card.Text className="text-uppercase text-white fs-4 py-2">
            Where history takes shape in exclusive and special environments
          </Card.Text>
          <Button className="px-2 py-2 rounded-3 text-uppercase" variant="primary" size="sm">
            Buy your vip ticket
          </Button>{' '}
          <Card.Text className="text-uppercase text-white fs-5 mt-4">Hire seasonal product</Card.Text>
        </Card.ImgOverlay>
      </div>
      <div className="my-5">
        <Container>
          <Row className="justify-content-between">
            <Col className="col-6 d-flex flex-column">
              <Card.Text>
                Experience the emotion of Real Madrid from an exceptional location at the Santiago Bernabéu Stadium or
                WiZink Center while enjoying all of the unique and exclusive services provided by Área VIP-Corporate
                Hospitality.
              </Card.Text>
              <br />
              <Card.Text>
                Hospitality tickets to any game of the season include gourmet catering, hostess services and cloakroom
                in annexed hospitality areas. Book your seasonal or matchday tickets now.
              </Card.Text>
            </Col>
            <Col className="col-3 text-white text-uppercase">
              <Card>
                <Image fluid src={Imgparty} />
                <Card.ImgOverlay style={{top:'0', right:'0'}}>
                  <Card.Title className='fs-2 text-end'>vip party</Card.Title>
                </Card.ImgOverlay>
              </Card>
              <Card>
                <Image fluid src={Imgseason} />
                <Card.ImgOverlay>
                  <Card.Title className='fs-2'>vip season</Card.Title>
                </Card.ImgOverlay>
              </Card>
              <Card>
                <Image fluid src={Imgbasketball} />
                <Card.ImgOverlay>
                  <Card.Title className='fs-2'>vip basketball</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default VipPage;
