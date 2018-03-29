import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

class AuthFormRegister extends React.Component {
  render() {
    return (
      <Form>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" xl="12">
              <FormGroup>
                <Label for="Name">Email</Label>
                <Input type="text" name="name" id="Name" placeholder="Name" />
                <Label for="Password">Email</Label>
                <Input type="password" name="password" id="Password" placeholder="Password" />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Col>
          </Row>
        </Container>
      </Form>);
  }
}

export default AuthFormRegister;
