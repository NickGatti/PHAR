import React, { Component } from 'react'
import PetCard from './PetCard';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAdoptions } from "../../redux/actions";

class CardWrapper extends Component {

componentDidMount() {
    this.props.fetchAdoptions()
}

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

const mapStateToProps = ({adoptions}) => {
    return {
        adoptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAdoptions: bindActionCreators(fetchAdoptions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardWrapper)