import React from 'react'
import '../../App.css'
import { Col, Row, Nav } from 'react-bootstrap'
import ProfilePicture from '../../Asset/33-CSAS5_Headshots_Manuel_Leyva (1).jpg'
import NavbarComponent from '../NavbarComponent/NavbarComponent'
import AboutMeComponent from '../AboutMeComponent/AboutMeComponent'
import ProjectComponent from '../ProjectComponent/ProjectComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

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
          <h5 className='text-white'>I'm a Jr. Front-End engineer based in Stockton, CA. I spcialize <br /> in building   exceptional websites, applications, and everything <br /> in between. </h5>
        </Col>
      </Row>

      <Row>
        <Col className='aboutMeCuz'>
        <AboutMeComponent />
        </Col>
      </Row>

      <Row>
        <Col>
        <ProjectComponent />
        </Col>
      </Row>

      <Row>
        <Col>
        <FooterComponent />
        </Col>
      </Row>
    </div>
  )
}
