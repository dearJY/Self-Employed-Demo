import React from 'react';
import {shallow} from 'enzyme';
import SelfInputBox from './selfInputBox'

test("renders selfInputBox correctly", () => {
    let onChangeFn = () => {
        console.log("input changed")
    };
    const tree = shallow(
        <SelfInputBox placeholder="enter here" type="text" onChange={onChangeFn} />
    );
    expect(tree).toMatchSnapshot();
});