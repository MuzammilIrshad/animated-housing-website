import React, { useEffect } from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './DropDown.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DropDownContainer = styled.div`
transition:0.3s, ease-in-out;
opacity:${({ isOpen }) => (isOpen ? '1' : '0')};
width:40px;
`;

const CloseIcon = styled(FaTimes)`
color:#000d1a;
`;
const DropDownWrapper = styled.div`
`;

const DropDownLink = styled(Link)`
display:flex;
padding-top:1em;
align-items:center;
justify-content:center;
color:#fff;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
&:hover{
color:#000d1a;
}
`;
const DropDown = ({isOpen, toggle }) => {

    useEffect(() => {
        AOS.init({duration:2000})
    }, [])
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle} id='DropDownContainer'>
            <div onClick={toggle} id='icon'>
                <CloseIcon />
            </div>
            <DropDownWrapper data-aos='fade-down'>
                {menuData.map((item, ind) => (
                    <DropDownLink to={item.link} >
                        {item.title}
                    </DropDownLink>
                ))}
                <div id='DropDownMenu'>
                    <div id='BtnWrap' >
                        <Button
                            primary='true'
                            round='true'
                            big='true'
                            to='/contact'>Contact Us</Button>
                    </div>
                </div>
            </DropDownWrapper>
        </DropDownContainer>
    )
}
export default DropDown;