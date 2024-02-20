import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Card, Container, Tab, Tabs } from 'react-bootstrap';

const query = graphql`
  {
    allContentfulProductContent {
      nodes {
        id
        productTitle
        productDescription
        productLinks {
          title
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const Wrapper = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
`;

const Products = () => {
  const data = useStaticQuery(query);

  return (
    <Container className='lead text-muted rounded bg-light py-2'>
      <Tabs defaultActiveKey={0} id="tabs-example" className="justify-content-center">
        {data.allContentfulProductContent.nodes.map((item, index) => (
          <Tab eventKey={index} title={item.productTitle} key={index}>
            <p className='text-center my-3'>{item.productDescription}</p>
            <div className="d-flex flex-wrap justify-content-center">
              {item.productLinks.map((linkItem, linkIndex) => (
                <Card key={linkIndex} style={{ width: '18rem', margin: '10px' }} className='col-12 col-md-6 col-lg-3'>
                  <Wrapper image={linkItem.gatsbyImageData} alt={linkItem.title}></Wrapper>
                  <Card.Body>
                    <Card.Title>{linkItem.title}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default Products;
