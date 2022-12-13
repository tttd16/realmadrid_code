import React from 'react';
import { Card, Container, Col, Image, Row } from 'react-bootstrap';

import Image1 from '~/assets/imgs/champions/image1.png';
import Image2 from '~/assets/imgs/champions/image2.png';
import Image3 from '~/assets/imgs/champions/image3.png';

const ChampionPage = () => {
  return (
    <Container className="championpage bg-light">
      <Row>
        <Col className='d-flex flex-column justify-content-center' xs={12} sm={12} lg={6} xl={6} xxl={6}>
          <Card.Title className="fs-2 pb-3 under__champion">Champions League moments</Card.Title>
          <Card.Text className="text-wrap">
            Real Madrid continues to make history, becoming the club to achieve record extending 14 European Titles and
            35 Spanish League La Liga Titles with its thrilling victory in the 2022 UEFA Champions League Finals and the
            FIFA Club World Club 2018
          </Card.Text>
        </Col>
        <Col className="champion-image col-6">
          <Image fluid style={{width:'120px', height: '400px'}} className="image image-1" src={Image1} alt=""  />
          <Image fluid style={{width:'120px', height: '400px'}} className="image image-2" src={Image2} alt=""  />
          <Image fluid style={{width:'120px', height: '400px'}} className="image image-3" src={Image3} alt=""  />
        </Col>
      </Row>
    </Container>
  );
};

export default ChampionPage;
