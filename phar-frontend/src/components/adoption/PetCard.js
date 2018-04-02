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
  Col
} from "reactstrap";

import Question from "./Question";

const PetCard = (props) => {
  return <Col className="mt-4" xs="4" sm="4" md="4" lg="4" xl="4">
      <Card>
        <CardImg top width="100%" src={props.pet.media.photos.photo[3]["$t"]} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.pet.name["$t"]}</CardTitle>
          <CardSubtitle>Description</CardSubtitle>
          {props.pet.description["$t"]}
        </CardBody>
      </Card>
    </Col>;
}

export default PetCard;