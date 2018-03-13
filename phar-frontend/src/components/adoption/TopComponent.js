import React, { Component } from 'react'
import { Container, Row, Col, Media } from 'reactstrap';
import Captain from '../../images/captian.jpg'

class TopComponent extends Component {

render() {
        return (
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <img className="img-fluid" src={Captain} />
                    </Col>
                    <Col xs="8" sm="8" md="8" lg="8" xl="8">
                        <h4>Adoption</h4>
                        <p>Here you can view adoptable pets avaiable at the Pathways Home Animal Shelter</p>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default TopComponent