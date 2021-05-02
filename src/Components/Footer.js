import React, { useEffect } from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Footer() {

    useEffect(() => {

        AOS.init({ duration: 2000 });
    }, [])

    return (
        <Container className='footer' fluid>
            <Row>
                <Col xs={12} md={6} data-aos='zoom-in' className='cols'>
                    <h1>LET'S BUILD</h1>
                    <h1> YOUR OWN HOUSE</h1>
                    <h3>
                        <FaFacebookF className='icon' />
                        <FaYoutube className='icon' />
                        <FaInstagram className='icon' />
                        <FaLinkedin className='icon' />
                    </h3>
                </Col>
                <Col xs={6} md={3} className='cols'>
                    <div>
                        <h5>Contact Us</h5>
                        <h5>FAQs</h5>
                        <h5>Support</h5>
                        <h5>Questions</h5>
                    </div>

                </Col>
                <Col xs={6} md={3} className='cols'>
                    <div>
                        <h5>Islamabad</h5>
                        <h5>Lahore</h5>
                        <h5>Karachi</h5>
                        <h5>Quetta</h5>
                    </div>

                </Col>
            </Row>
           
        </Container>
    );
}