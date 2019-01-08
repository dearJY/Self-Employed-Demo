import React, {Component} from 'react';
import styled from 'styled-components';
import {ProjectInfo} from "./projectInfo";
import ProjectQuickBid from "./projectQuickBid";
import {SelfTag} from "../../component-library/selfTag/selfTag";
/*
project info
{
    id:number;
    projectName: string;
    postTime: date;
    expiredTime: date;
    description: string;
    paymentType: hourly/fixed(string);
    basePayment: number;
    currentBid: basePayment as default;
    bidNumber: number;
    sold:boolean;
    sellerInfo: class sellerInfo
    buyerInfo: class buyerInfo;// assume buyer can not cancel or modify bid price after submit
    bidders:list of bidders info
}

buyerInfo
{
    id:number;
    userName:string;
    onGoingProjects: list of projectInfo which containes final price;
    biddingProjects: list of projectInfo which container bidding price;(send notification if his/her price is beaten)
    doneProjects: list of projectInfo;
    totalEarning: number;
}
*/
const StyledProjectCard = styled.div`
    border-top: 1px #eceef1 solid;
    border-bottom: 1px #eceef1 solid;
    height:200px;
    padding:10px;
    display:flex;
    margin:0;
`;

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBid:props.projectInfo.currentBid,
        };
        this.updateFn = this.updateFn.bind(this);
    }

    updateFn(updatedBid) {
        this.setState({currentBid:updatedBid});
        console.log("update to data store");
    }

    render() {
        return <StyledProjectCard>
            <ProjectInfo projectInfo={this.props.projectInfo} />
            <ProjectQuickBid currentBid={this.state.currentBid} paymentType = {this.props.projectInfo.paymentType} cardConfig={this.props.cardConfig} onCurrentBidChange={this.updateFn} />
         </StyledProjectCard>
    }
}

export default ProjectCard;
