import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section = styled.div`
width:100%;
height:100%;
padding:45rem 0rem;
margin-bottom:-5em;
`;

const ColumnLeft = styled.div`
flex-direction:column;
justify-content;center;
align-items:flex-start;
line-height:1.4;
padding:1rem 2rem;
h1{
margin-bottom:1rem;
font-size:calc(1.5rem, 6vw, 2rem);
}

p{
margin-bottom:2rem;
}
`;
const ColumnRight = styled.div`
padding:1rem 2rem;
img{
width:100%;
height:100%;
border-radius:50%;
object-fit:cover;
}
`;
export default function Info({
    heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image, InfoDataTwo }) {

    useEffect(() => {

        AOS.init({ duration: 2000 });
    }, [])

    return (    
        <Section>
            <Container>
                <Row lg={2} xs={1} data-aos="fade-up">
                    <Col>
                        <ColumnLeft>
                            <h1><Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(heading).start()
                                }}
                            /></h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                            <Button variant="info" to='/homes'>{buttonLabel}</Button>
                        </ColumnLeft>
                    </Col>
                    <Col>
                        <ColumnRight reverse={reverse}>

                            <img src={image} data-aos='slide-left' data-aos-duration="3000"/>
                        </ColumnRight>
                    </Col>
                </Row>
                <Row lg={2} xs={1} data-aos="fade-up">
                   
                    <Col>
                        <ColumnRight reverse={reverse}>

                            <img src={InfoDataTwo.image} data-aos='slide-down'/>
                        </ColumnRight>
                    </Col>
                    <Col>
                        <ColumnLeft>
                            <h1><Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(InfoDataTwo.heading).start()
                                }}
                            /></h1>
                            <p>{paragraphOne}</p>
                            <p>{paragraphTwo}</p>
                            <Button variant="info" to='/homes'>{buttonLabel}</Button>
                        </ColumnLeft>
                    </Col>
                </Row>
            </Container>

        </Section>
        
        
        )
}