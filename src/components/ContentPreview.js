import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const ProductPreview = ({ title, description, replaces, video }) => {
  return (
    <Container className="p-4 ">
      <Row>
        <Col lg={4} className='mx-auto  mb-3 d-flex justify-content-center align-items-center'>
        <div className="embed-responsive embed-responsive-16by9">
            <iframe 
            //   width="560" 
            //   height="315" 
              src= {video}
              title={`Video for ${title}`} 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
              className='embed-responsive-item rounded shadow-sm'>
            </iframe>
        </div>
        </Col>
        <Col lg={8} md={7} className="border rounded shadow-sm mx-auto">
          <h2>{title}</h2>
          <p>{description}</p>
          <p><strong>Replaces:</strong> {replaces}</p>
          
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPreview;
