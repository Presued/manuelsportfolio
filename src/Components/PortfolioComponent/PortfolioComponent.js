import React from 'react'
import '../../App.css'
import { Col, Row, Nav } from 'react-bootstrap'
import ProfilePicture from '../../Asset/33-CSAS5_Headshots_Manuel_Leyva.jpg'
import NavbarComponent from '../NavbarComponent/NavbarComponent'
import AboutMeComponent from '../AboutMeComponent/AboutMeComponent'

export default function PortfolioComponent() {
  return (
    <div className='brImg'>
      <NavbarComponent />
      <Row className='mPic'>
        <Col lg={4} className='movePicture'>
          <img className='customizeProfilePic' src={ProfilePicture} height='350px' alt='Picture of Manuel' />
        </Col>
        <Col lg={8} className='customizeText'>
          <h1 className='text-white'>Hey, I'm Manuel</h1>
          <h5 className='text-white'>Jr. Software Engineer </h5>
        </Col>
      </Row>

      <Row>
        <Col className='aboutMeCuz'>
        <AboutMeComponent />
        </Col>
      </Row>
    </div>
  )
}
