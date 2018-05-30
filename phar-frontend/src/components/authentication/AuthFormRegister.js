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
              <Form action='http://localhost:8000/register' method='POST'>
                <FormGroup>
                  <Label for="NameRegister">Email</Label>
                  <Input type="text" name="name" id="NameRegister" placeholder="Name" />
                  <Label for="PasswordRegister">Email</Label>
                  <Input type="password" name="password" id="PasswordRegister" placeholder="Password" />
                </FormGroup>
                <Button color="primary">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Form>);
  }
}

export default AuthFormRegister;
