import * as React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    positon:fixed;
    top:0;
    box-sizing:border-box;
    background-color:#393a3d;
    display:flex;
    justify-content:space-between;
    padding:5px 20px;
    align-items:center;
    width:100%;
`;

const TextContainer = styled.div`
    margin:5px 10px;
    color:white;
    text-align:center;
`;

const Title = styled(TextContainer)`
    font-size:20px;
`;

const User = styled(TextContainer)`
   font-size:15px;
`;

export const Header = () => {
    return <StyledHeader>
        <Title>Self-Employed</Title>
        <User>Buyer</User>
    </StyledHeader>
};
