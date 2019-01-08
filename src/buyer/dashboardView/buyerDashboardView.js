import React, {Component} from 'react';
import {MainView} from "../../component-library/mainView/mainView";
import {Container} from "../../component-library/container/container";
import {ProjectList} from "../homeView/projectList";
import styled from "styled-components";

// buyerInfo
// {
//     id:number;
//     userName:string;
//     onGoingProjects: list of projectInfo which containes final price;
//     biddingProjects: list of projectInfo which container bidding price;(send notification if his/her price is beaten)
//     doneProjects: list of projectInfo;
//     totalEarning: number;
// }

//data part
const sampleProjectInfo = {
    "id":"p1",
    "projectName": "building marketplace for self-employed",
    "postTime": new Date(),
    "expiredTime": new Date(2019,1,9),
    "description": "Assume all projects can be done remotely/online. You do not need to worry about matching by location. The Buyer with the lowest bid automatically wins the bid when the deadline is reached. Lowest bid is displayed on the project page.",
    "paymentType": "fix",
    "basePayment": 10000,
    "currentBid": 10000,
    "bidders":["a","n","c"],
    "bidNum":3,
    "sold":false,
    "sellerId": null,
    "buyerId": null
};
const onGoingProjects = [Object.assign(sampleProjectInfo,{"sold":true,"sellerId":"s1"})];
const biddingProjects = [Object.assign({},sampleProjectInfo,{"id":"p2","sellerId":"s1"}),
    Object.assign({},sampleProjectInfo,{"id":"p3","sellerId":"s2"})];
const finishedProjects = [Object.assign({},sampleProjectInfo,{"id":"p4","sellerId":"s1"}),
    Object.assign({},sampleProjectInfo,{"id":"p5","sellerId":"s3"})];

const userInfo = {
    "id": "u1",
    "userName":"Doris",
    "onGoingProjects":onGoingProjects,
    "biddingProjects":biddingProjects,
    "finishedProjects":finishedProjects,
    "totalEarning":100
};


//styling
const BigNum = styled.h1`
    font-size:50px;
    text-align:center;
`;
const containerConfig = {
    display:"inline-block",
    width:"45%",
    height:"500px",
}

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
}


class BuyerDashboardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{}
        };
    }

    componentDidMount() {
        this.setState({userInfo:this.fetchUserInfo()});
    }

    fetchUserInfo() {
        return userInfo;
    }

    render() {
        const biddingProjects = this.state.userInfo.biddingProjects || [];
        const onGoingProjects = this.state.userInfo.onGoingProjects || [];
        const finishedProjects = this.state.userInfo.finishedProjects || [];
        const cardConfig = {
            cardType:"tagCard"
        };
        return <MainView title="Your Actions">
                <Container headerText="Your Earning" containerConfig={containerConfig}>
                    <BigNum>{`$${this.state.userInfo.totalEarning}`}</BigNum>
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