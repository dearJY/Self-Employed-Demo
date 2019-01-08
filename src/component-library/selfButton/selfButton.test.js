import React from 'react';
import {SelfButton} from "./SelfButton";
import {shallow} from 'enzyme';

test("renders selfButton correctly", () => {
    const tree = shallow(
        <SelfButton text="click me"></SelfButton>
    );
    expect(tree).toMatchSnapshot();
});