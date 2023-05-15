import React from 'react'
import '../../App.css'
import '../NavbarComponent/Navbar.css'
import { Col, Row, Nav, NavDropdown, Navbar, Container, Form, Button } from 'react-bootstrap'

export default function NavbarComponent() {
    return (
        <div>
            <Row>
                <Col>
                    <Navbar bg="secondary" variant="light" expand="lg">
                        <Col lg={1} xl={2}>
                            <h4 className='text-white manuelCuztomize'>manuel.dev</h4>
                        </Col>
                        <Col lg={11} xl={10} className='destinationCustomize'>
                            <Row>
                                <Col>
                                <span>Home</span> <span>About</span> <span>Projects</span>
                               </Col>
                            </Row>
                        </Col>
                    </Navbar>

                </Col>
            </Row>
        </div>
    )
}
