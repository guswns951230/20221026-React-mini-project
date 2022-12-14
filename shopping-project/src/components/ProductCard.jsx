import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

const ProductCard = (props) => {
  const { product } = props;

  return (
    <Card style={{ width: "13rem" }}>
      {/* image를 들고올 때 변수 사용시 require 사용 */}
      <Card.Img
        variant="top"
        src={require(`../img/${product.productPicture}`)}
      />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Button variant="outline-primary">
          <FontAwesomeIcon icon={emptyHeart} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
