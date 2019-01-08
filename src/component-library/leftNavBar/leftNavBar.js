import * as React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const LeftNavBarContainer= styled.div`
    width:20%;
    height:100%;
    box-sizing:border-box;
`;

const StyledUL = styled.ul`
    list-style-type:none;
    padding-left:20px;
    padding-right:10px;
    text-align:left;
    margin-top:0;
`;

const StyledLink = styled(Link)`
    text-decoration:none;
    color:black;
    display:block;
    font-size:15px;
    height:40px;
    padding:10px;
    box-sizing:border-box;
    &:hover, &:focus {
        background-color:#eceef1;
    }
`;


export const LeftNavBar = () => {
    return <LeftNavBarContainer>
        <StyledUL>
            <li><StyledLink to="/">Home</StyledLink></li>
            <li><StyledLink to="/dashboard">Dashboard</StyledLink></li>
        </StyledUL>
    </LeftNavBarContainer>
};
