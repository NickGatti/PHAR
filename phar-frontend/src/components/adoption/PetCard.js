import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import Question from "./Question";

class PetCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    e.preventDefault()
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
        <Card>
          <CardImg top width="100%" src={this.props.pet.media.photos.photo[3]["$t"]} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.pet.name["$t"]}</CardTitle>
            <div>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>{this.props.pet.description["$t"]}</ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>
                    Do Something
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
            <CardSubtitle>Description</CardSubtitle>
            {this.props.pet.description["$t"].slice(0, 60)}...&nbsp;
             <a href="#" onClick={this.toggle}>
              More
            </a>
          </CardBody>
        </Card>
      </Col>;
  }
}

export default PetCard;