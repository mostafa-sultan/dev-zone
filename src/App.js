import React from "react";
import MarkeDiv from "./component/markedComponent/MarkeDiv";
import NavBar from "./component/navbar/NavBar";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import ListItem from './component/sidelist/ListItem';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "# jhkjhj\n* kljklj",
    };
  }

  render() {
    return (
      <Container id="containerr" fluid="false">
        <Row>
          <Col md={12}>  <NavBar /> </Col>
        </Row>
        <Row id="page">
          <Col  md={8} >  <MarkeDiv /> </Col>
          <Col  md={4} className="h"> <ListItem/> </Col>
 
        </Row>
      </Container>
    );
  }
}
