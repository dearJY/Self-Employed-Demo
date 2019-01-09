import React from 'react';
import {shallow} from 'enzyme';
import {Container} from "./container";

test("renders Container correctly", () => {
    const tree = shallow(
        <Container headerText="header text" />
    );
    expect(tree).toMatchSnapshot();
});