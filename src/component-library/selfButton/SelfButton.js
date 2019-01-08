import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color:rgb(44, 160, 28);
    border-radius: 3px;
    color:white;
    border: none;
    padding:10px;
    font-size:15px;
    cursor:pointer;
`;

export const SelfButton = (props) => {
    return <Button onClick={props.onClick}>{props.text}</Button>
};
