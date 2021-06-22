import React, {useEffect, useContext} from 'react'
import CartContext from '../../context/cartContext/cartContext'
import Loading from "../shr/Loading";
import Message from "../shr/Message";
import { Col, Row, ListGroup, Image, Form, Button, Card } from "react-bootstrap";

//*location es lo que vamos a usar para ver el quantity
const Cart = ({match, location, history}) => {
    const {cartItem, addCartItem} = useContext(CartContext)

    //*lo saco de la url
    const productId = match.params.id

    //*saco de la ruta el quantity, y le saco todo lo que venga antes del =
    const quantity = location.search ? +location.search.split('=')[1] : 1
    console.log(quantity);

    //*necesito chequear si hay un id porque agregué algo, o entré desde el ícono de la barra
    useEffect(() => {
        if(productId) {
            addCartItem(productId, quantity)
        }
        console.log(productId);
    }, [productId, quantity])



    return (
        <div>
            cart
        </div>
    )
}

export default Cart
