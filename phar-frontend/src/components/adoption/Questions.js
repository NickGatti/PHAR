import React, { Component } from 'react'
import { 
    ListGroupItem, 
    Button, 
    Row, 
    Col, 
    Container, 
    Form, 
    FormGroup, 
    Input, 
    Label 
} from 'reactstrap'

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

render() {
        return (
            <div>
                <Container>
                    <tbody>
                        <thead>
                            <h4>Questions:</h4>
                        </thead>
                    </tbody>
                </Container>
            </div>
        )
    }
}

export default Questions