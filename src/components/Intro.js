import React from 'react';
import Typical from 'react-typical';
import { Button, Container, Row, Col} from 'react-bootstrap';

export default function Intro() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Hi, I'm Emmie Ohnuki.</h1>
                        <p>
                            I'm 
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[' a student.', 1000, 
                                ' an iOS developer.', 1000, 
                                ' a web developer.', 1000, 
                                ' a programming instructor.', 1000, 
                                ' a photographer.', 1000]}
                            />
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="outline-light" size='lg'>LEARN MORE ABOUT ME</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}