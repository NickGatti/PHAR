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
  ListGroup
} from "reactstrap";

import Question from "./Question";
import Donny from '../../images/donny.jpg'

const PetCard = (props) => {
  return (
      <Card>
        <CardImg top width="100%" src={Donny} alt="Card image cap" />
        <CardBody>
          <CardTitle>Donny</CardTitle>
          <CardSubtitle>Questions</CardSubtitle>
            <ListGroup>
              <Question />
            </ListGroup>
            <br />
            <br />
            <Form>
              <FormGroup>
                <Input type="text" name="question" placeholder="Ask a question" />
              </FormGroup>
            </Form>
          <Button color="primary">Ask!</Button>
        </CardBody>
      </Card>
      );
}

export default PetCard;