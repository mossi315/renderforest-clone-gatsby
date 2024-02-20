import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ContentSolution = ({ problem, solution }) => {
  return (
    <Container className="content-solution-container pb-3">
      <Row>
        <Col lg={6} className="problem-col">
          <Card>
            <Card.Body>
              <Card.Title>😞 Problem:</Card.Title>
              <Card.Text>"{problem}"</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="solution-col">
          <Card>
            <Card.Body>
              <Card.Title>🤩 Solution:</Card.Title>
              <Card.Text>{solution}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentSolution;
