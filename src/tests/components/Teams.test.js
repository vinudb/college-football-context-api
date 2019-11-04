import React from 'react';
import ReactDOM from 'react-dom';
import Teams from '../../components/Teams';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FootballContext from '../../context/footballContext';
import * as ContextModule from "../../context/footballContext";
import { conferenceDisplayList, teamsDisplayList, findByTestAtrr } from "../utils";

const setUp = () => {
    setUpContext();
    configure({ adapter: new Adapter() });
    const wrapper = shallow(
        <FootballContext.Provider>
            <Teams />
        </FootballContext.Provider>
    ).dive()
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

const setUpContext = () => {
    const onConferenceSelect = jest.fn();
    const contextValues = {
        display: {
            displayList: teamsDisplayList,
            page: {}
        },
        conferences: conferenceDisplayList,
        onConferenceSelect
    }
    jest.spyOn(ContextModule, "useFootballContext").mockImplementation(() => (contextValues));
}


describe('renders without crashing with correct values',  () => {
    it('Renders without crash', () => {
        expect(wrapper.length).toBe(1);
    });
});


