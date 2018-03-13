import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Zeus from '../../images/zeus_carol.jpg'
import Julian from '../../images/julian.jpg'

class BottomContent extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <img className="img-fluid" src={Zeus} alt="Zeus" />
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <div>You may donate by credit or debit card at <a href="https://www.paypal.com/donate/?token=gyHFvDuny0dkwN3mD7P75g6CxaqlZKjCACJTN1XpnX7K0_ZWATdGGiX01_mBlH8Jzhz6uG">PayPal</a>, or send us a message if you prefer to mail a check and we'll give you the information for that.

You may also donate via our paypal at Pathwayshomerescue@gmail.com

Thank you so much for caring for the dogs!</div>
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <img className="img-fluid" src={Julian} alt="Julian And His Dog" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BottomContent