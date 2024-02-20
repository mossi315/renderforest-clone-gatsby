import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

const query = graphql`
  {
    allContentfulHero {
      nodes {
        title
        description
        video
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  const { title, description, video } = data.allContentfulHero.nodes[0];

  return (
    <Container className='container-md pt-4 mt-3'>
      <Row className='py-4'>
        <Col lg={5} md={6} sm={12} className='text-center text-lg-start lead text-muted my-2'>
          <h1>{title}</h1>
          <p>{description}</p>
          <Button type="button" value="Input">
            Start Free Now
          </Button>
        </Col>
        <Col lg={7} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className='embed-responsive-item rounded shadow-sm'
              // width={560}
              // height={315}
              src={video}
              title={`Video for ${title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {/* <div className="embed-responsive embed-responsive-21by9 w-100 h-100">
            <iframe className="embed-responsive-item" src={video} title={`Video for ${title}`}allowfullscreen></iframe>
          </div> */}
        </Col>
      </Row>
      <Row className='text-center mt-3'>
        <Col xs={3}>
          <StaticImage src='../images/five_stars_icon.svg' alt='Five Star Rating' width={95} height={15}/>
        </Col>
        <Col xs={3}>
          <StaticImage src='../images/g2_logo_icon.svg' alt='Five Star Rating' width={65} height={18} />
        </Col>
        <Col xs={3}>
          <StaticImage src='../images/capterra_logo_icon.svg' alt='Five Star Rating' width={77} height={17} />
        </Col>
        <Col xs={3}>
          <StaticImage src='../images/sourceforge_logo_icon.svg' alt='Five Star Rating' width={108} height={15} />
        </Col>
      </Row>
      <Row className='text-center mt-4 mb-4 lead text-muted'>
        <p>Trusted by <span>22M+</span> users and <span>100k+</span> high-end companies</p>
      </Row>
    </Container>
  );
};

export default Hero;
