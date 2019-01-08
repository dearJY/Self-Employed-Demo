import React, {Component} from 'react';
import styled from 'styled-components';
import {ProjectInfo} from "./projectInfo";
import ProjectQuickBid from "./projectQuickBid";

//Styling
const StyledProjectCard = styled.div`
    border-top: 1px #eceef1 solid;
    border-bottom: 1px #eceef1 solid;
    height:200px;
    padding:10px;
    display:flex;
    margin:0;
`;

//Component
class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.updateFn = this.updateFn.bind(this);
    }

    updateFn() {
        this.props.onSubmitBid(this.props.projectInfo.id);
    }

    render() {
        return <StyledProjectCard>
            <ProjectInfo projectInfo={this.props.projectInfo} />
            <ProjectQuickBid projectId={this.props.projectInfo.id} currentBid={this.props.projectInfo.currentBid} paymentType = {this.props.projectInfo.paymentType} cardConfig={this.props.cardConfig} onCurrentBidChange={this.updateFn} />
         </StyledProjectCard>
    }
}

export default ProjectCard;
