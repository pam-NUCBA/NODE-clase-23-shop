import React, {useState, useEffect} from "react";
import { Col, Row } from "react-bootstrap";
// import products from "../../products";
import Product from "../shr/Product";
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      //este data lo destructuro de res.data:
      const {data} = await axios.get('/api/products')
      console.log(data);
    setProducts(data)
    }
    getProducts()
  }, [])

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
