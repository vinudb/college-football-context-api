import React from 'react';
import FootballContext from "../context/footballContext";
import fetchConference from '../utils/fetchConference';
import fetchTeams from '../utils/fetchTeams';
import Teams from './Teams';
import Conferences from './Conferences';
import PaginationFooter from './PaginationFooter';
import { getTotalPages, selector, getTotalCount } from '../utils/utils';
import Navigation from './Navigation';

class CollegeFootballApp extends React.Component {
    state = {
        teamsMasterList: [],
        conferenceMasterList: [],
        currentViewTotalPages: 1,
        currentViewTotalCount: 1,
        page: 1,
        pageSize: 3,
        teamsDisplay: [],
        conferenceDisplay: [],
        currentView: "teams"
    }

    componentDidMount = () => {
        Promise.all([fetchTeams(), fetchConference()])
            .then(([teamsMasterList, conferenceMasterList]) => {
                this.setState({
                    teamsMasterList,
                    conferenceMasterList,
                    currentViewTotalCount: getTotalCount({...this.state, teamsMasterList, conferenceMasterList}),
                    currentViewTotalPages: getTotalPages({ ...this.state, teamsMasterList, conferenceMasterList })
                },
                    () => this.fetchFromSelector());
            })
            .catch((e) => console.log(e));
    }

    fetchFromSelector = () => this.state.currentView === "teams" ?
        this.setState({ teamsDisplay: selector(this.state) }) :
        this.setState({ conferenceDisplay: selector(this.state) });

    onNextPreviousClick = pageToBe =>
        this.setState({ page: this.state.page + pageToBe }, () => this.fetchFromSelector());

    onPageSizeClick = pageSize => {
        const currentViewTotalPages = getTotalPages({ ...this.state, pageSize });
        this.setState({ pageSize, currentViewTotalPages, page: 1 }, () => this.fetchFromSelector());
    }

    onConferenceFilterClick = conference => {
        fetchTeams(conference)
            .then((teamsMasterList) =>
                this.setState({
                    teamsMasterList,
                    page: 1,
                    currentViewTotalPages: getTotalPages({ ...this.state, teamsMasterList })
                }, () => this.fetchFromSelector()));
    }

    setCurrentView = currentView => {
        this.setState({
            currentView,
            page: 1,
            currentViewTotalPages: getTotalPages({ ...this.state, currentView })
        }, () => this.fetchFromSelector());
    }

    render() {
        const { page, pageSize, teamsDisplay, conferenceDisplay, currentViewTotalPages, currentView, conferenceMasterList } = this.state;
        const contextValues = {
            page,
            pageSize,
            teamsDisplay,
            conferenceDisplay,
            currentViewTotalPages,
            currentView,
            conferenceMasterList,
            onNextPreviousClick: this.onNextPreviousClick,
            onPageSizeClick: this.onPageSizeClick,
            setCurrentView: this.setCurrentView,
            onConferenceFilterClick: this.onConferenceFilterClick
        }

        return (
            <div>
                <FootballContext.Provider value={contextValues}>
                    <Navigation />
                    {currentView === "teams" ? <Teams /> : <Conferences />}
                    <PaginationFooter />
                </FootballContext.Provider>
            </div>
        );
    }
}

export default CollegeFootballApp;