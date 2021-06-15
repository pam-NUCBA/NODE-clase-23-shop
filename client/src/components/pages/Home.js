import React, { useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import ProductsContext from "../../context/productsContext/productsContext";
import Product from "../shr/Product";
import Loading from "../shr/Loading";
import Message from "../shr/Message";

const Home = () => {
  const { products, loading, error, listProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      {/* para generar un error: en backend ir a productsController y tirar un throw new Error */}
      <h1>Our Latest stuff</h1>
      {loading ? (
        // <h2>Wait while we find amazing products!</h2>
        <Loading />
      ) : error ? (
        // <h3>{error}</h3>
        <Message variant="danger" >{error}  </Message>
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
