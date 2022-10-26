import "./App.css";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import NavComp from "./components/NavComp";
import CardComp from "./components/CardComp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <NavComp />
      <CardComp />
      <Button
        as="a"
        variant="primary"
        onClick={() => {
          alert("Click!");
        }}
      >
        Button as link
      </Button>
      <Container>
        <Row>
          <Col xs="6">1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
