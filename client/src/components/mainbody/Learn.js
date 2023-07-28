import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Learn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Learn() {
    return (
        <div className='main-learn-box'>

            <h2 className='main-learn-h2'>
                What you'll learn
            </h2>

            <Container>
                <Row
                >
                    <Col>
                        <div
                            style={{
                                display: "flex"
                            }}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                            <Col className='main-learn-col'>Develop modern, complex, responsive and scalable web applications with Angular</Col>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                display: "flex"
                            }}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                            <Col className='main-learn-col'>Fully understand the architecture behind an Angular application and how to use it</Col>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{
                                display: "flex"
                            }}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                            <Col className='main-learn-col'>
                                Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer
                            </Col>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                display: "flex"
                            }}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                            <Col className='main-learn-col'>
                                Create single-page applications with one of the most modern JavaScript frameworks out there
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Learn
