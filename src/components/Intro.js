import React from 'react';
import Typical from 'react-typical';
import { Button } from 'react-bootstrap';

export default function Intro() {
    return (
        <div>
            <div class='row'>
                <div class='col'>
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
                </div>
            </div>
            <div class='row'>
                <Button variant="outline-light" size='lg' block>LEARN MORE ABOUT ME</Button>{' '}
            </div>
        </div>
    )
}