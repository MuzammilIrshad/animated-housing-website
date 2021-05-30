import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { SliderData } from '../data/SliderData';
import styled from 'styled-components';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Houses = styled.div`

display:flex;
`;

export default function Cards() {


    return (
        <Container>
        <Houses data-aos="fade-up">
                <Row>
                    {SliderData.map((data) => (
                        <Col xs={12} sm={6} lg={4}>
                    <Card style={{ width: '18rem', marginLeft:'2em', marginTop:'1em'}}>
                        <Card.Img variant="top" src={data.image} alt={data.alt} />
                   
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Title>Price: ${data.price}</Card.Title>
                            </Card.Body>
                       
                        </Card>
                    </Col>
                ))}
                </Row>
            </Houses>
        </Container>
        )
}

