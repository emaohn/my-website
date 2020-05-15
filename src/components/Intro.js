import React from 'react';
import Typical from 'react-typical'
import { Button, Container, Row, Col} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';

export default function Intro() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm='12'>
                        <Typography variant='h1' component='h2' gutterBottom>
                            Hi, I'm Emmie Ohnuki.
                        </Typography>
                        <Typography variant='h4' gutterBottom>
                            I'm 
                                <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[' a CS student.', 1000, 
                                    ' an iOS developer.', 1000, 
                                    ' a web developer.', 1000, 
                                    ' a hacker.', 1000,
                                    ' a programming instructor instructor.', 1000, 
                                    ' a photographer.', 1000]}
                                />
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Button variant="outline-light" size='lg'>LEARN MORE ABOUT ME</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}