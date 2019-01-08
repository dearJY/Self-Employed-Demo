import * as React from 'react';
import styled from 'styled-components';

const BasicDiv = styled.div`
    margin:10px;
`;

const ProjectInfoContainer = styled(BasicDiv)`
    margin:10px;
    width:60%;
    overflow:scroll;
`;
const ProjectName = styled(BasicDiv)`
    font-size:20px;
    text-transform:capitalize;
`;
const SubInfoContainer = styled.div`
    display:flex;
    margin:10px;
    justify-content:flex-start;
`;

const SubInfo = styled.p`
    font-size:12px;
    margin:5px;
`;

const Description = styled.p`
    color:#404040;
    font-size:15px;
`;
const SubInfoList = (props) => {
    return <SubInfoContainer>
        <SubInfo>{`Posted: ${props.info.postTime.toLocaleDateString()}`}</SubInfo>
        <SubInfo>{`Expires: ${props.info.expiredTime.toLocaleDateString()}`}</SubInfo>
        <SubInfo>{`${props.info.bidNum} bids`}</SubInfo>
    </SubInfoContainer>
};


export const ProjectInfo = (props) => {
    const projectInfo = props.projectInfo;
    if (!props.projectInfo) {
        return null;
    } else {
        return <ProjectInfoContainer>
            <ProjectName>{projectInfo.projectName}</ProjectName>
            <SubInfoList info={projectInfo}></SubInfoList>
            <Description>{projectInfo.description}</Description>
        </ProjectInfoContainer>;
    }
};
