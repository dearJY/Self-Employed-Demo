import React, {Component} from 'react';
import {MainView} from "../../component-library/mainView/mainView";
import {Container} from "../../component-library/container/container";
import {ProjectList} from "../homeView/projectList";
import styled from "styled-components";
import {api} from "../../services/api";

//styling
const BigNum = styled.h1`
    font-size:50px;
    text-align:center;
`;

//configs
const containerConfig = {
    display:"inline-block",
    width:"45%",
    height:"500px",
};

const cardConfigs = {
    bidding: {
        tagType: "orange",
        tagText: "Bidding"
    },
    onGoing: {
        tagType: "blue",
        tagText: "On Going"
    },
    finished: {
        tagType: "green",
        tagText: "Finished"
    }
};

//Service
export function getUserTotalEarning(projects) {
    return projects.reduce((acc,project) => {
        if (project.paymentType === "hourly") {
            return acc + parseInt(project.currentBid)*parseInt(project.workingHours);
        } else {
            return acc + parseInt(project.currentBid);
        }
    },0)
}


//Component
class BuyerDashboardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{}
        };
    }

    componentDidMount() {
        const data = api.fetchBuyerInfo("u12")[0];
        this.setState({userInfo:data});
    }

    render() {
        const biddingProjects = this.state.userInfo.biddingProjects || [];
        const onGoingProjects = this.state.userInfo.onGoingProjects || [];
        const finishedProjects = this.state.userInfo.finishedProjects || [];
        const cardConfig = {
            cardType:"tagCard"
        };
        return <MainView title="Dashboard">
                <Container headerText="Your Earning" containerConfig={containerConfig}>
                    <BigNum>{`$${getUserTotalEarning(finishedProjects)}`}</BigNum>
                </Container>
                <Container headerText="Bidding Projects" containerConfig={containerConfig}>
                    <ProjectList projects={biddingProjects} cardConfig={{...cardConfig,...cardConfigs.bidding}} />
                </Container>
                <Container headerText="onGoing Projects" containerConfig={containerConfig}>
                    <ProjectList projects={onGoingProjects} cardConfig={{...cardConfig,...cardConfigs.onGoing}}/>
                </Container>
                <Container headerText="Finished Projects" containerConfig={containerConfig}>
                    <ProjectList projects={finishedProjects} cardConfig={{...cardConfig,...cardConfigs.finished}}/>
                </Container>
        </MainView>
    }
}

export default BuyerDashboardView;