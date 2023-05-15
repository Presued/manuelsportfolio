import '../../App.css'
import { Col, Row, Nav, NavDropdown, Navbar, Container, Form, Button } from 'react-bootstrap'
import '../AboutMeComponent/AboutMeComponent.css'
import AboutImg from '../../Asset/AboutMeImgs.jpeg'

import React from 'react'

export default function AboutMeComponent() {
  return (
    <div className='aboutMeBackground'>
        <Row className='pt-3'>
            <Col>
                <h1 className='text-center text-white'> About Me </h1>
            </Col>
        </Row>

        <Row className='pt-4'>
            <Col  className='aboutImgCustomize'>
              <img className='aboutImgBorder' src={AboutImg} height='375px' alt='coder' />
            </Col>
            <Col lg={6} className='text-white aboutMeTextCustomize'>
            <p>As a junior Front-End engineer, I possess an impressive <br /> arsenal of skills in HTML, CSS, JavaScript, and React. I <br /> excel in designing and maintaining responsive websites <br /> that offer a smooth user experience, I thrive in collaborative <br /> environments that encourage creativity and continuous learning.</p>
            </Col>
        </Row>
    </div>
  )
}
