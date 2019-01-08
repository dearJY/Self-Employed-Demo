import React, {Component} from 'react';
import {MainView} from "../../component-library/mainView/mainView";
import {ProjectList} from "./projectList";
import SelfSearchBar from "../../component-library/selfSearchBar/selfSearchBar";
import Select from 'react-select';
import styled from 'styled-components';
import {api} from "../../services/api";

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
        this.handleSubmitBid = this.handleSubmitBid.bind(this);
    }

    componentDidMount() {
        const data = api.fetchRecentProjects();
        this.setState({allProjectInfo:data});
    }


    handleSearchTextChange(value) {
        this.setState({searchText:value});
    }

    handleSelectOptionChange(selectedOption) {
        this.setState({selectedOption: selectedOption});
    }

    handleSubmitBid(projectId) {
        this.setState((preState) => {
            let copy = preState.allProjectInfo.slice(0);
            return {allProjectInfo:copy.filter(project => project.id !== projectId)};
        });
    }

    render() {
        return <MainView title="Find a project">
            <FlexWrap>
            <SelfSearchBar selfSearchBarStyle={selfSearchBarStyle} placeholder="Search Projects" searchText={this.state.searchText} onChange={this.handleSearchTextChange}/>
                <FlexItem><Select options={sortOptions} value={this.state.selectedOption} onChange={this.handleSelectOptionChange} /></FlexItem>
            </FlexWrap>
            <ProjectList onSubmitBid={this.handleSubmitBid} projects={this.state.allProjectInfo} cardConfig={{cardType:"bidCard"}} searchText={this.state.searchText} sortingType={this.state.selectedOption.value} />
        </MainView>
    }
}

export default BuyerHomeView;