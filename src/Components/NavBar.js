import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function NavBar (){
    return(
<>
<header>
    <Bar>
        <NavItem>
            <NavLink to="/" end>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/moodquestionspage">Info</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/emotioncard">Mood List</NavLink>
        </NavItem>
    </Bar>
</header>

</>
    );
}
export default NavBar;

const Bar = styled.ul`
margin: 0;
padding: 0;
overflow: hidden;
background-color: #333;
`;

const NavItem = styled.li`
display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    float: left;

    a{
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    a:hover:not(.active){
        background-color: #ADD8E6;
        color: #000000;
    }

    .active{
        background-color: #ADD8E6;
        color: #000000;
    }
`;