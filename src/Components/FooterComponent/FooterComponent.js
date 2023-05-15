import React from 'react'
import '../FooterComponent/FooterComponent.css'
import { Col, Row } from 'react-bootstrap'

export default function FooterComponent() {
  return (
    <div className='FooterBackgroundColor'>
        <Row className=''>
            <Col>
                <h1 className='text-white text-center pt-3'>Footer</h1>
            </Col>
        </Row>
    </div>
  )
}
