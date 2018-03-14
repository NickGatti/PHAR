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

const PetCard = (props) => {
  return <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Donny</CardTitle>
          <CardSubtitle>Questions</CardSubtitle>
          <CardText>
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
          </CardText>
          <Button color="primary">Ask!</Button>
        </CardBody>
      </Card>;
}

export default PetCard;