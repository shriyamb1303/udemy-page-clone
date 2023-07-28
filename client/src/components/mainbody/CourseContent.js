import React from 'react'
import './CourseContent.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { content } from '../../utils/courseccinfo';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CourseContent() {
    return (
        <div className='cc-main'>
            <h2 className='main-cc-h2'>
                Course content
            </h2>
            <Container>
                {content.map(item => {
                    return (
                        <Row className='main-cc-row'>
                            <Col className='main-cc-col'>
                                <FontAwesomeIcon icon={faAngleDown} />
                                <span>{item.name}</span>
                            </Col>
                            <Col className='main-cc-col'>
                                <p className='main-cc-p'>{item.lecture}lectures {item.time}</p>
                            </Col>
                        </Row>
                    )
                })
                }
            </Container>
        </div>
    )
}

export default CourseContent
