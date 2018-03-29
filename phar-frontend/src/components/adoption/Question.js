import React from 'react'
import { ListGroupItem, Button, Row, Col } from 'reactstrap'

const Question = (props) => {
    return (
        <Row>
          <Col xs="3" sm="3" md="3" lg="3" xl="3">
            <Button style={{ padding: "3px" }} color="warning">
              Change!
            </Button>
          </Col>
          <Col xs="3" sm="3" md="3" lg="3" xl="3">
            <Button style={{ padding: "3px" }} color="danger">
              Delete!
            </Button>
          </Col>
        </Row>
    );
}

export default Question