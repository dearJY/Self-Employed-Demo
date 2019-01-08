import React from 'react';
import {Container} from "../../component-library/container/container";
import ProjectCard from "../projectCard/projectCard"

//service
function sortingService(dataList,sortingType) {

    if (sortingType === "postTime" || sortingType === "expiredTime") {
        dataList.sort((data_1, data_2) => {
            let a =data_1[sortingType];
            let b = data_2[sortingType];
            return a-b;
        });
    }
    return dataList;
}

//Component
export const ProjectList = (props) => {
    const searchText = props.searchText || "";

    //generate project list
    let sortedProjects = sortingService(props.projects.slice(0),props.sortingType);
    let projectCards = [];
    sortedProjects.forEach((projectInfo) => {
        if (projectInfo.projectName.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
            return;
        }
        projectCards.push(<ProjectCard projectInfo={projectInfo} cardConfig={props.cardConfig} key={projectInfo.id} onSubmitBid={props.onSubmitBid}/>)
    });

    return (
        <Container>
            {projectCards}
        </Container>
    );
};