import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Container, Image, Row, Col } from 'react-bootstrap';

// import ImgNews from '~/datas/ImgNews';

const NewBlogs = () => {
    
   

  return (
    <div>
      
    </div>
    // {ImgNews.map((item, index) => {
    //     <Container key={index} className="d-flex flex-column align-items-center">
    //       <Image fluid src={item.image} alt={item.alt} />
    //       <div className="d-flex flex-column align-items-center ">
    //         <Card.Title className="wrapper__content text-primary fs-1 py-5">{item.title}</Card.Title>
    //       </div>
    //       <div className="wrapper__content">
    //         <Row className="justify-content-between">
    //           <Col className="col-6">
    //             <Card.Text>{item.blog.date}</Card.Text>
    //             <Card.Title>{item.blog.content}</Card.Title>
    //             <Card.Text className="fs-5">
    //               <u>
    //                 <strong>{item.blog.group}</strong>
    //               </u>
    //               <br />
    //               {item.blog.result_1}
    //               <br />
    //               {item.blog.result_2}

    //               <br />
    //               {item.blog.result_3}
    //             </Card.Text>
    //           </Col>
    //           <Col className="col-4">
    //             <Image src={item.blog.image} />
    //           </Col>
    //         </Row>
    //       </div>
    //     </Container>;
    //   })}
  );
};

export default NewBlogs;
