import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    background-color:white;
    padding: 20px;
    margin:20px;
    box-sizing:border-box;
    display:${props => props.display || "block"};
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    overflow:scroll;
`;

const StyledHeader = styled.p`
    font-size:20px;
    margin:10px;
`;

const SubContainer = styled.div`
    overflow:scroll;
`;

export const Container = (props) => {
    const headerText = props.headerText;
    const containerConfig = props.containerConfig;
    return <StyledContainer {...containerConfig}>
        {headerText && <StyledHeader>{props.headerText}</StyledHeader>}
        {props.children}
    </StyledContainer>
};
