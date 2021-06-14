import React, { useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../shr/Product";
import ProductsContext from "../../context/productsContext/productsContext";

const Home = () => {
  const { products, listProducts } = useContext(ProductsContext);
  
  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      <h1>Our Latest stuff</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} key={product._id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
