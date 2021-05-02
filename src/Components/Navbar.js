import React, {useState } from 'react';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
//import { MenuData } from '../data/MenuData'
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import DropDown from './DropDown';

const NavLink = css`
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
text-decoration:none;
`
const Logo = styled(Link)`
${NavLink}   
color:white;
    font-style:italic
`;
const MenuBars = styled(FaBars)`
display:none;
@media screen and (max-width:768px){
display:block;
background-image:url(${FaBars});
background-size:contain;
height:40px;
width:40px;
position:absolute;
top:0;
right:0;
transform: translate(-50%, 25%);
}

`;
const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-48px;
@media screen and (max-width:768px){
     display:none;
}
`;
const NavMenuLinks = styled(Link)`
color:white;
${NavLink}
`
export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen)
    }
    return (
        <nav>
            <Logo to='/'>Hello</Logo>
            <MenuBars onClick={toggle} />
            <DropDown isOpen={isOpen} toggle={toggle} />
            <NavMenu>
                {menuData.map((item, ind) => (
                    <NavMenuLinks to={item.link} key={ind}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <div id='NavBtn'>
                <Button to='/contact Us' primary='true'>Contact Us</Button>
            </div>
         </nav>
        
        )
}