import "./App.css";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import NavComp from "./components/NavComp";
import CardComp from "./components/CardComp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBagShopping,
  faHeart as fullHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTrashCan,
  faHeart as cleanHeart,
} from "@fortawesome/free-regular-svg-icons";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
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
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faBagShopping} />
        <FontAwesomeIcon icon={faTrashCan} />
        <FontAwesomeIcon icon={fullHeart} />
      </Button>
      <Container>
        <Row>
          <Col xs="6">1 of 3</Col>
          <Col>Variable width content</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={fullHeart}
      onClick={onClick}
      className={className}
      style={{ color: "red" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export default App;
