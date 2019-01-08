import React from "react";
import styled from "styled-components";

const StyledTag = styled.p`
    background-color:${props => props.backgroundColor || "rgb(44, 160, 28)"};
    border-radius: 3px;
    color:white;
    border: none;
    padding:10px;
    font-size:15px;
    width:80px;
    height:10px;
    text-align:center;
`;

function getColor(tagType) {
    switch (tagType) {
        case "green": return "rgb(44, 160, 28)";
        case "orange": return "#ff7300";
        case "blue": return "#4774b7";
        default: return "rgb(44, 160, 28)";
    }
}
export const SelfTag = (props) => {
    return <StyledTag backgroundColor={getColor(props.tagType)}>{props.text}</StyledTag>
};