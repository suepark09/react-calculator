import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Keypad(props) {
  return (
    <Container>
        <Row className="btn-row">
            <Col className="btn">AC</Col>
            <Col className="btn">+/-</Col>
            <Col className="btn">%</Col>
            <Col className="btn">÷</Col>
        </Row>
        <Row>
            <Col className="btn" onClick = { props.onClick }>7</Col>
            <Col className="btn">8</Col>
            <Col className="btn">9</Col>
            <Col className="btn">×</Col>
        </Row>
        <Row>
            <Col className="btn">4</Col>
            <Col className="btn">5</Col>
            <Col className="btn">6</Col>
            <Col className="btn">-</Col>
        </Row>
        <Row>
            <Col className="btn">1</Col>
            <Col className="btn">2</Col>
            <Col className="btn">3</Col>
            <Col className="btn">+</Col>
        </Row>
        <Row>
            <Col className="btn">0</Col>
            <Col className="btn">.</Col>
            <Col className="btn">=</Col>
        </Row>
    </Container>
  );
}

export default Keypad;