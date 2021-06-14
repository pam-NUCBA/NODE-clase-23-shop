import React from "react";
import { Card } from "react-bootstrap";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const Product = ({ product }) => {
  const { _id, name, rating, numReviews, price, image } = product;
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title>{name}</Card.Title>
        </Link>
        <Card.Text as="div">
          <Ratings value={rating} text={`${numReviews} reviews`} color="#009688" />
        </Card.Text>
        <Card.Text as="h3">
          <NumberFormat
            displayType={"text"}
            value={price}
            prefix={"$"}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
          ></NumberFormat>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
