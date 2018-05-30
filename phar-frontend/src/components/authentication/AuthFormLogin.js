import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

class AuthFormLogin extends React.Component {
  render() {
    return (
      <Form>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" xl="12">
              <Form action='http://localhost:8000/auth' method='POST'>
                <FormGroup>
                  <Label for="NameLogin">Email</Label>
                  <Input type="text" name="name" id="NameLogin" placeholder="Name" />
                  <Label for="PasswordLogin">Email</Label>
                  <Input type="password" name="password" id="PasswordLogin" placeholder="Password" />
                </FormGroup>
                <Button color="primary">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Form>);
  }
}

export default AuthFormLogin