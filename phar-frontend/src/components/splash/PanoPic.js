import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DonnyKatie from '../../images/donny_katie.jpg'

class PanoPic extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <img className="img-fluid img-pano" src={DonnyKatie} alt="Donny and Katie" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PanoPic