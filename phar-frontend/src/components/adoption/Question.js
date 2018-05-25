import React from 'react'
import { ListGroupItem, Button, Row, Col, Container } from 'reactstrap'

const Question = (props) => {
    return (
      <div>
        <Container>
          <tbody>
            <thead>
                <h4>Questions:</h4>
            </thead>
          </tbody>
        </Container>
      <Container>
        <Row>
          <Col xs="3" sm="3" md="3" lg="3" xl="3">
            <Button style={{ padding: "3px", paddingLeft: "6px", paddingRight: "6px" }} color="primary">
              Add
            </Button>
          </Col>
          <Col xs="1" sm="1" md="1" lg="1" xl="1" />
          <Col xs="3" sm="3" md="3" lg="3" xl="3">
            <Button style={{ padding: "3px", paddingLeft: "6px", paddingRight: "6px" }} color="warning">
              Edit
            </Button>
          </Col>
        <Col xs="1" sm="1" md="1" lg="1" xl="1"/>
          <Col xs="2" sm="2" md="2" lg="2" xl="2">
            <Button style={{ padding: "3px", paddingLeft: "6px", paddingRight: "6px"  }} color="danger">
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
      </div>
    );
}

export default Question