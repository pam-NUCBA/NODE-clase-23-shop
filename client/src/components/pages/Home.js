import React, { useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../shr/Product";
import ProductsContext from "../../context/productsContext/productsContext";

const Home = () => {
  const { products, loading, error, listProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      <h1>Our Latest stuff</h1>
      {loading ? (
        <h2>Wait while we find amazing products!</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={4}>
              <Product product={product} key={product._id} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
