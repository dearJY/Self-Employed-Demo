import React, { Component } from 'react';
import styled from 'styled-components';
import {LeftNavBar} from "../component-library/leftNavBar/leftNavBar";
import {Header} from "../component-library/header/header";
import BuyerDashboardView from "./dashboardView/buyerDashboardView";
import { BrowserRouter as Router, Route} from "react-router-dom";
import BuyerHomeView from "./homeView/buyerHomeView";

const AppContentContainer = styled.div`
  display:flex;
  padding-top:40px;
`;

class BuyerApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <AppContentContainer>
                        <LeftNavBar />
                        <Route exact path="/" component={BuyerHomeView} />
                        <Route path="/dashboard/" component={BuyerDashboardView} />
                    </AppContentContainer>
                </div>
            </Router>
        );
    }
}

export default BuyerApp;
