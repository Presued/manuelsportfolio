import React from 'react'
import '../../App.css'
import { Col, Row, Nav, NavDropdown, Navbar, Container, Form, Button } from 'react-bootstrap'

export default function NavbarComponent() {
    return (
        <div>
            <Row>
                <Col lg={12}>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <Navbar.Brand href="#home">Home</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link >About Me</Nav.Link>
                                <Nav.Link >Projects</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>

                </Col>
            </Row>
        </div>
    )
}
