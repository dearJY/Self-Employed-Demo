import React, {Component} from 'react';
import styled from 'styled-components';
import {SelfButton} from "../../component-library/selfButton/SelfButton";
import SelfInputBox from "../../component-library/selfInputBox/selfInputBox";
import {SelfTag} from "../../component-library/selfTag/selfTag";

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
        this.props.onCurrentBidChange(this.state.inputValue);
    }


    render() {
        return <ProjectQuickBidContainer>
            <BasicDiv>
                <h1>{`${this.props.currentBid}${this.props.paymentType === "hourly"?"/hr":""}`}</h1>
                <PaymentType>{this.props.paymentType === "fix"?"Fixed Price":"Hourly"}</PaymentType>
            </BasicDiv>
            {this.props.cardConfig.cardType === "bidCard"?
                <BidInputWrap>
                    <SelfInputBox placeholder="Enter your price" type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
                    <SelfButton text="Quick Bid" onClick={this.handleSubmit}/></BidInputWrap> :<SelfTag tagType={this.props.cardConfig.tagType} text={this.props.cardConfig.tagText}/>}
        </ProjectQuickBidContainer>;
    }
}

export default ProjectQuickBid;