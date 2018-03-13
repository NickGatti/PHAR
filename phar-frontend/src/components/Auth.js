import React, { Component } from 'react'
import TopNav from './TopNav'
import { Row, Col, Container } from "reactstrap";
import AuthFormLogin from './authentication/AuthFormLogin';
import AuthFormRegister from './authentication/AuthFormRegister';

class Auth extends Component {

render() {
        return <div>
            <TopNav />
            <Container style={{ marginTop: 30 }}>
              <Row>
                <Col xs="6" sm="6" md="6" lg="6" xl="6">
                  <h4>Login</h4>
                  <AuthFormLogin />
                </Col>
                <Col xs="6" sm="6" md="6" lg="6" xl="6">
                  <h4>Register</h4>
                  <AuthFormRegister />
                </Col>
              </Row>
            </Container>
          </div>;
    }
}

export default Auth