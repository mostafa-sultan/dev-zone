import React, { Component } from "react";
import "./ListItem.css";
import { ListGroup, Col, Container } from "react-bootstrap";

export default class ListItem extends Component {
  render() {
    return (
      <div>
        <ListGroup variant="flush">
          <ListGroup.Item>C++</ListGroup.Item>
          <ListGroup.Item>Java</ListGroup.Item>
          <ListGroup.Item>Python</ListGroup.Item>
          <ListGroup.Item>Algorisem</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
