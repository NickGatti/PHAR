import React from 'react'
import { ListGroupItem, Button, Row, Col, Container } from 'reactstrap'

const Question = (props) => {
    return (
      <Container>
        <Row>
          <Col xs="2" sm="2" md="2" lg="2" xl="2">
            <Button style={{ padding: "3px", paddingLeft: "6px", paddingRight: "6px" }} color="primary">
              Add!
            </Button>
          </Col>
          <Col xs="1" sm="1" md="1" lg="1" xl="1" />
          <Col xs="2" sm="2" md="2" lg="2" xl="2">
            <Button style={{ padding: "3px", paddingLeft: "6px", paddingRight: "6px" }} color="warning">
              Change!
            </Button>
          </Col>
        <Col xs="1" sm="1" md="1" lg="1" xl="1"/>
          <Col xs="2" sm="2" md="2" lg="2" xl="2">
            <Button style={{ padding: "3px", paddingLeft: "6px", paddingRight: "6px"  }} color="danger">
              Delete!
            </Button>
          </Col>
        </Row>
      </Container>
    );
}

export default Question