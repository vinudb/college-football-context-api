import React from 'react';
import ReactDOM from 'react-dom';
import Conferences from '../../components/Conferences';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FootballContext from '../../context/footballContext';
import * as ContextModule from "../../context/footballContext";
import { conferenceDisplayList } from "../utils";

const setUp = () => {
    configure({ adapter: new Adapter() });
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

const setUpContext = () => {
    const contextValues = {
        display: {
            displayList: conferenceDisplayList,
            page: {}
        }
    }
    jest.spyOn(ContextModule, "useFootballContext").mockImplementation(() => (contextValues));
}


describe('renders without crashing with correct values',  () => {
    it('Renders without crash', () => {
        setUpContext();
        const wrapper = shallow(
            <FootballContext.Provider>
                <Conferences />
            </FootballContext.Provider>
        ).dive();
        expect(wrapper.length).toBe(1);
    });
});


