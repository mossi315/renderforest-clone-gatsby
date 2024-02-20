import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BadgeComponent = ({ badges }) => {
  return (
    <Container fluid>
      <Row className="justify-content-center mb-4">
        {badges.reverse().map((badge) => (
          <Col key={badge.id} xs={2} md={2} lg={2}>
            <img src={badge.badgeLink} alt={badge.badge} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BadgeComponent;
