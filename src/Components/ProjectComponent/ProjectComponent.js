import { Col, Row, Nav, Button } from 'react-bootstrap'
import '../ProjectComponent/ProjectComponent.css'
import FleetFinder from '../../Asset/FleetFinderPic.png'
import Advice from '../../Asset/active-states.jpg'

import React from 'react'

export default function ProjectComponent() {
  return (
    <div>
        <Row>
            <Col>
                <h1 className='text-white text-center pt-3'>Projects</h1>
            </Col>
        </Row>

        <Row>
            <Col className='pt-3' style={{paddingLeft: 170}}>
            <img style={{borderRadius: 10}} src={FleetFinder} height='350px' alt="fleet finder dashboard" />
            </Col>

            <Col className='fleetDescriptionCuz' lg={6}>
                <Row>
                    <Col className='fleetCuzText'>
                    <h4 className='text-white'>Fleet Finder</h4>
                    </Col>
                    <p className='text-white'>Fleet Finder is designed to enhance communication <br /> and streamline operations in the transportation industry. <br /> Fleet Finder will simplify the process of notifying dispatch <br /> teams about the location and other important details of the <br /> company's trailers, thereby assisting both truck drivers and <br /> dispatch teams. Through Fleet Finder, truck drivers can easily <br /> submit a form that will be immediately viewable by the dispatch <br /> team, providing them with real-time updates on the status of <br /> trailers and other key information.</p>
                    <Row>
                    <Col lg={6} style={{paddingLeft: 70}}>
                    <Button variant='secondary'> Live Demo </Button>
                    </Col>
                    <Col lg={6}> 
                    <Button variant='secondary'> Repository </Button>
                    </Col>
                    </Row>
                </Row>
            </Col>
        </Row>

        <Row style={{paddingTop: 70}}>
            <Col style={{paddingLeft: 200}}>
                <h4 className='text-white adviceTextCuz'> Advice Generator </h4>
                <p className='text-white' style={{paddingLeft: 50}}>I fetched an api that gives up random adive and I <br /> crreated a function that allows you to randomly <br /> out put random advice from the api we fetched.</p>
                <Row>
                    <Col lg={6} style={{paddingLeft: 70}}>
                    <Button variant='secondary'> Live Demo </Button>
                    </Col>
                    <Col lg={6}> 
                    <Button variant='secondary'> Repository </Button>
                    </Col>
                    </Row>
            </Col>


            <Col lg={6} style={{paddingLeft: 140}}>
            <img src={Advice}  style={{borderRadius: 10}} height='280px' alt='Exaple of advice generator' />
            </Col>
        </Row>

        <Row style={{paddingTop: 60}}>
            <Col className='pt-3' style={{paddingLeft: 170}}>
            <img style={{borderRadius: 10}} src={FleetFinder} height='350px' alt="fleet finder dashboard" />
            </Col>

            <Col className='fleetDescriptionCuz' lg={6}>
                <Row>
                    <Col className='fleetCuzText'>
                    <h4 className='text-white'>Puppy Resturant</h4>
                    </Col>
                    <p className='text-white'>Fleet Finder is designed to enhance communication <br /> and streamline operations in the transportation industry. <br /> Fleet Finder will simplify the process of notifying dispatch <br /> teams about the location and other important details of the <br /> company's trailers, thereby assisting both truck drivers and <br /> dispatch teams. Through Fleet Finder, truck drivers can easily <br /> submit a form that will be immediately viewable by the dispatch <br /> team, providing them with real-time updates on the status of <br /> trailers and other key information.</p>
                    <Row>
                    <Col lg={6} style={{paddingLeft: 70}}>
                    <Button variant='secondary'> Live Demo </Button>
                    </Col>
                    <Col lg={6}> 
                    <Button variant='secondary'> Repository </Button>
                    </Col>
                    </Row>
                </Row>
            </Col>
        </Row>


    </div>
  )
}
