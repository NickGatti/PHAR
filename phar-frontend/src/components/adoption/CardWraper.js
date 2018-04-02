import React, { Component } from 'react'
import PetCard from './PetCard';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAdoptions } from "../../redux/actions";

class CardWrapper extends Component {

render() {
            if (this.props.adoptions === undefined) {
                return <div>Loading...</div>;
            }
            let adoptionList = this.props.adoptions.map(
                (pet, index) => {
                return <PetCard key={index} pet={pet} />;
                }
            );  
            return (
                <Container style={{ marginBottom: 30 }}>
                    <Row>{adoptionList}</Row>
                </Container>
            );
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