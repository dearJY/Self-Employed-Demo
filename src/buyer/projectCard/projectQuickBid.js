import React, {Component} from 'react';
import styled from 'styled-components';
import {SelfButton} from "../../component-library/selfButton/SelfButton";
import SelfInputBox from "../../component-library/selfInputBox/selfInputBox";
import {SelfTag} from "../../component-library/selfTag/selfTag";
import {api} from "../../services/api";

//Styling
const BasicDiv = styled.div`
    margin:10px;
`;

const ProjectQuickBidContainer = styled(BasicDiv)`
    width:40%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const PaymentType = styled.p`
    font-size:12px;
    text-align:center;
`;

const BidInputWrap = styled.div`
    text-align:center;
`;


//Component
class ProjectQuickBid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(value) {
        this.setState({inputValue:value});
    }

    handleSubmit() {
        if (this.state.inputValue>=this.props.projectInfo.currentBid) {
            alert(`you should enter price greater than ${this.props.projectInfo.currentBid}`);
            return;
        }
        const addNewBidAlert = api.addNewBidToProject(this.props.projectInfo.projectId,"u1",this.state.inputValue);
        alert(addNewBidAlert);
        this.props.onCurrentBidChange();
    }


    render() {
        return <ProjectQuickBidContainer>
            <BasicDiv>
                <h1>{`${this.props.projectInfo.currentBid}${this.props.projectInfo.paymentType === "hourly"?"/hr":""}`}</h1>
                <PaymentType>{this.props.projectInfo.paymentType === "fix"?"Fixed Price":`Hourly | ${this.props.projectInfo.workingHours} hrs`}</PaymentType>
            </BasicDiv>
            {this.props.cardConfig.cardType === "bidCard"?
                <BidInputWrap>
                    <SelfInputBox placeholder="Enter your price" type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
                    <SelfButton text="Quick Bid" onClick={this.handleSubmit}/></BidInputWrap> :<SelfTag tagType={this.props.cardConfig.tagType} text={this.props.cardConfig.tagText}/>}
        </ProjectQuickBidContainer>;
    }
}

export default ProjectQuickBid;
