import React, { useEffect, useContext, useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Ratings from "../shr/Ratings";
import NumberFormat from "react-number-format";
import ProductsContext from "../../context/productsContext/productsContext";
import Loading from "../shr/Loading";
import Message from "../shr/Message";

const Product = ({match, history}) => {
  //*en principio paso 1 como cantidad, luego se va a reemplazar
  const [quantity, setQuantity] = useState(1)
  const { product, loading, error, productDetail } =
    useContext(ProductsContext);

    // console.log(product);

    const { image, name, rating, numReviews, price, description, countInStock } =
      product;

    useEffect(() => {
    productDetail(match.params.id);
    // console.log(match.params.id);
  }, []);

  const handleAddToCart = () => {
    //*match ya lo traemos desde las props, agregamos history a ellas
    history.push(`/cart/${match.params.id}?quantity=${quantity}`)
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error} </Message>
      ) : (
        <>
          <Link className="btn btn-dark my-3" to="/">
            Return to main
          </Link>
          <Row>
            <Col md={6}>
              <Image src={image} alt={name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Ratings value={rating} text={`${numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <NumberFormat
                    displayType={"text"}
                    value={price}
                    prefix={"$"}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  ></NumberFormat>
                </ListGroup.Item>
                {/* <ListGroup.Item>Price: ${price}</ListGroup.Item> */}
                <ListGroup.Item>Description: {description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>
                          <NumberFormat
                            displayType={"text"}
                            value={price}
                            prefix={"$"}
                            thousandSeparator={true}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          ></NumberFormat>
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        <strong>
                          {countInStock > 0 ? "In Stock" : "Out of Stock"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {/* el boton de cantidad a comprar solo debería verse si hay cantidad */}
                  {product.countInStock > 0 &&
                    <ListGroup.Item>
                      <Row>
                        <Col>Quantity</Col>
                        <Col>
                        <Form.Control as="select" value={quantity} onChange={e => setQuantity(e.target.value)}>
                      {  [...Array(product.countInStock).keys()].map(q => (
                          <option key={q + 1} value={q + 1}>
                            {q + 1}
                          </option>
                        ))}

                        </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  }
                  <ListGroup.Item>
                    <Button
                      className="btn-block btn-dark"
                      type="button"
                      disabled={countInStock === 0}
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Product;
