import React, {useEffect, useContext, useState} from 'react'
import CartContext from '../../context/cartContext/cartContext'
import Loading from "../shr/Loading";
import Message from "../shr/Message";
import { Col, Row, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//*location es lo que vamos a usar para ver el quantity
const Cart = ({match, location, history}) => {
    const {cartItems, addCartItem, removeCartItem} = useContext(CartContext)
    const cartItemsData = JSON.parse(localStorage.getItem('cartItems'))

    //*lo saco de la url
    const productId = match.params.id

    //*saco de la ruta el quantity, y le saco todo lo que venga antes del =
    const quantity = location.search ? +location.search.split('=')[1] : 1
    // console.log(quantity);

    //*necesito chequear si hay un id porque agregué algo, o entré desde el ícono de la barra
    useEffect(() => {
        if(productId) {
            addCartItem(productId, quantity)
        }
        //*podemos ver que está funcionando usando la pestaña de components y buscando cart, y también en el local storage
        // console.log(productId);
    }, [productId, quantity])

    const handleRemoveItem = (id)=> {
        console.log(`remove ${id}`);
        removeCartItem(id)
    }


    return (
        <Row>
            <Col md="8">
                <h2>My cart</h2>
                {!cartItemsData || cartItemsData.length === 0 ? (
                    <>
                <Message>Your cart is empty! Go back and buy some stuff!
                </Message>
                    <Link className="btn btn-dark my-3" to="/">
                        Return to main
                    </Link>
                    </>
                    ) :  (
                        <>
                        <ListGroup variant="flush">
                            {cartItemsData.map(item => (
                                <ListGroup.Item key={item._id}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded className="cart-image" />
                                        </Col>
                                        <Col md={3}>
                                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>
                                            <NumberFormat
                                                displayType={"text"}
                                                value={item.price}
                                                prefix={"$"}
                                                thousandSeparator={true}
                                                decimalScale={2}
                                                fixedDecimalScale={true}
                                            >
                                            </NumberFormat>
                                        </Col>
                                        {/* revisar esto O.o */}
                                        <Col md={2}>
                                            <Form.Control as="select" value={item.quantity} onChange={e => addCartItem(item._id, +e.target.value)}>
                                                {  [...Array(item.countInStock).keys()].map(q => (
                                                <option key={q + 1} value={q + 1}>
                                            {q + 1}
                                        </option>
                                        ))}
                                         </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button type="button" variant="danger" onClick={()=> handleRemoveItem(item._id)}>
                                                <FontAwesomeIcon icon={faTrash}>

                                                </FontAwesomeIcon>
                                                </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        </>
                    )
                    }
            </Col>
            <Col md="2"></Col>
            <Col md="2"></Col>
        </Row>
    )
}

export default Cart
