import React from 'react';
import {shallow} from "enzyme";
import ProjectCard from "./projectCard"
import {ProjectInfo} from "./projectInfo";
import ProjectQuickBid from "./projectQuickBid"
import {projectInfo} from "../../services/staticData";

const testingProjectInfo = projectInfo;
const submitHandler = () => {
    console.log("submit handler from ProjectCard");
};
const cardConfig = [{cardType:"bidCard"},{cardType:"tagCard"}];

test("projectCard renders correctly", () => {
    const tree = shallow(
        <ProjectCard projectInfo={testingProjectInfo} onSubmitBid={submitHandler} />
    );
    expect(tree).toMatchSnapshot();
});

test("projectInfo renders correctly", () => {
    const tree = shallow(
        <ProjectInfo projectInfo={testingProjectInfo} />
    );
    expect(tree).toMatchSnapshot();
});

test("bidCard - projectQuickBid renders correctly", () => {
    const tree = shallow(
        <ProjectQuickBid projectInfo={testingProjectInfo} cardConfig={cardConfig[0]}/>
    );
    expect(tree).toMatchSnapshot();
});

test("tagCard - projectQuickBid renders correctly", () => {
    const tree = shallow(
        <ProjectQuickBid projectInfo={testingProjectInfo} cardConfig={cardConfig[1]}/>
    );
    expect(tree).toMatchSnapshot();
});

