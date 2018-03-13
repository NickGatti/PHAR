import React, { Component } from 'react'
import PetCard from './PetCard';
import { Container, Row, Col } from 'reactstrap';

class CardWrapper extends Component {

render() {
        return (
            <Container style={{ marginBottom: 30 }}>
                <Row>
                    <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
                        <PetCard />
                    </Col>
                    <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
                        <PetCard />
                    </Col>
                    <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
                        <PetCard />
                    </Col>
                    <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
                        <PetCard />
                    </Col>
                    <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
                        <PetCard />
                    </Col>
                    <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
                        <PetCard />
                    </Col>
                    <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
                        <PetCard />
                    </Col>
                    <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
                        <PetCard />
                    </Col>
                    <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
                        <PetCard />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CardWrapper