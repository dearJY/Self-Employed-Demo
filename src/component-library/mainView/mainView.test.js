import React from 'react';
import {shallow} from 'enzyme';
import {MainView} from "./mainView";

test("renders mainView correctly", () => {
    const tree = shallow(
        <MainView title="Main View Title">{`Content here`}</MainView>
    );
    expect(tree).toMatchSnapshot();
});