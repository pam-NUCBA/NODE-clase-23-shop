import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Hecho para Nucba &copy; 2021
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer
