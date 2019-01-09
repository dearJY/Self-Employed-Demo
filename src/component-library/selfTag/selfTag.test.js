import React from 'react';
import {shallow} from 'enzyme';
import {SelfTag} from "./selfTag";

test("renders selfTag correctly", () => {
    const tree = shallow(
        <SelfTag text="Tag Text" />
    );
    expect(tree).toMatchSnapshot();
});