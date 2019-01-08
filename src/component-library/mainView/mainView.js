import * as React from 'react';
import styled from 'styled-components';

const MainViewContainer = styled.div`
    height:100%;
    width:80%;
    box-sizing:border-box;
`;

const  StyledMainViewHeader= styled.h2`
    padding: 20px;
    margin:20px;
    font-size:20px;
    text-align:left;
    text-transform:uppercase;
`;

export const MainView = (props) => {
    return <MainViewContainer>
        <StyledMainViewHeader>{props.title}</StyledMainViewHeader>
        {props.children}
    </MainViewContainer>
};
