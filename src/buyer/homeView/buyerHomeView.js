import React, {Component} from 'react';
import {MainView} from "../../component-library/mainView/mainView";
import {ProjectList} from "./projectList";
import SelfSearchBar from "../../component-library/selfSearchBar/selfSearchBar";
import Select from 'react-select';
import styled from 'styled-components';

//data
const sampleProjectInfo = {
    "id":"1",
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
    "sellerInfo": null,
    "buyerInfo": null
};

//config
const sortOptions = [{
    label:"Post Time",
    value:"postTime"
},{
    label:"Expired Time",
    value:"expiredTime"
}];

//styling
const FlexWrap = styled.div`
    display:flex;
    align-items:baseline;
    margin:10px;
    justify-content:space-between;
`;

const selfSearchBarStyle = {
    width:"30%"
};

const FlexItem = styled.div`
    width:20%;
`;


//Component
class BuyerHomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText:'',
            selectedOption:sortOptions[0],
            allProjectInfo:[]
        };
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSelectOptionChange = this.handleSelectOptionChange.bind(this);
    }

    componentDidMount() {
        this.setState({allProjectInfo:this.fetchData()});
    }

    fetchData() {
        return this.generateAllProjectInfo(sampleProjectInfo);
    }

    //generate initial data of all project info
    generateAllProjectInfo(sampleProjectInfo) {
        let size = 5;
        let result = [];
        const testMapping = ["Java Developer","JavaScript Developer","UX Designer","Test Engineer"]
        while (size>0) {
            result.push(Object.assign({},sampleProjectInfo,{
                id:size,
                basePayment:10*size,
                currentBid:10*size,
                paymentType: size%2 === 0?"fix":"hourly",
                projectName:`${sampleProjectInfo.projectName} - ${testMapping[size%4]}`,
                postTime:new Date(2018,size%3,size),
                expiredTime:new Date(2019,size%4,28-size)
            }));
            size--;
        }
        return result;
    };

    handleSearchTextChange(value) {
        this.setState({searchText:value});
    }

    handleSelectOptionChange(selectedOption) {
        this.setState({selectedOption: selectedOption});
    }

    render() {
        return <MainView title="Find a project">
            <FlexWrap>
            <SelfSearchBar selfSearchBarStyle={selfSearchBarStyle} placeholder="Search Projects" searchText={this.state.searchText} onChange={this.handleSearchTextChange}/>
                <FlexItem><Select options={sortOptions} value={this.state.selectedOption} onChange={this.handleSelectOptionChange} /></FlexItem>
            </FlexWrap>
            <ProjectList projects={this.state.allProjectInfo} cardConfig={{cardType:"bidCard"}} searchText={this.state.searchText} sortingType={this.state.selectedOption.value} />
        </MainView>
    }
}

export default BuyerHomeView;