import React, {Component} from 'react';
import SelfInputBox from "../selfInputBox/selfInputBox";

class SelfSearchBar extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <SelfInputBox externalStyle={this.props.selfSearchBarStyle} placeholder={this.props.placeholder} type="text" value={this.props.searchText} onChange={this.props.onChange}/>
    }
}

export default SelfSearchBar;