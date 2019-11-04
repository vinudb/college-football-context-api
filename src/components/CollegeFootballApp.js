import React from 'react';
import FootballContext from "../context/footballContext";
import fetchConference from '../utils/fetchConference';
import fetchTeams from '../utils/fetchTeams';
import Teams from './Teams';
import Conferences from './Conferences';
import PaginationFooter from './PaginationFooter';
import { selector } from '../utils/utils';
import Navigation from './Navigation';
import { trackPromise } from 'react-promise-tracker';
import HamburgerMenuComponent from './HamburgerMenuComponent';

class CollegeFootballApp extends React.Component {
    state = {
        teams: [],
        conferences: [],
        display: {
            displayList: [],
            page: {
                pageNumber: 1,
                pageSize: 3,
                totalPages: 1,
                startCount: 0,
                endCount: 0,
                totalCount: 0
            }
        },
        currentView: "teams",
        open: false
    }

    componentDidMount = () => {
        trackPromise(
            Promise.all([fetchTeams(), fetchConference()])
                .then(([teams, conferences]) => {
                    this.setState({
                        teams,
                        conferences,
                        display: selector({ ...this.state, teams, conferences })
                    });
                })
                .catch((e) => console.log(e))
        );
    }

    onConferenceSelect = (conference) => {
        trackPromise(
            fetchTeams(conference)
                .then(teams => this.setState({
                    teams,
                    display: selector({ ...this.state, teams })
                })));
    }

    onNavigationClick = (currentView) =>
        this.setState({
            open: !this.state.open,
            currentView, display: selector({ ...this.state, currentView })
        })


    onPageSizeChange = (pageSize) => {
        const displayObj = { ...this.state.display };
        displayObj.page.pageSize = pageSize;
        displayObj.page.pageNumber = 1; //reset to first page
        this.setState({ display: selector({ ...this.state, display: { ...displayObj } }) });
    }

    onNextPrevChange = (pageToBe) => {
        const displayObj = { ...this.state.display };
        displayObj.page.pageNumber += pageToBe;
        this.setState({ display: selector({ ...this.state, display: { ...displayObj } }) });
    }

    handleClick = () => this.setState({ open: !this.state.open });

    render() {
        const { currentView, display, teams, conferences, open } = this.state;
        const contextValues = {
            currentView,
            display,
            teams,
            conferences,
            open,
            onConferenceSelect: this.onConferenceSelect,
            onNavigationClick: this.onNavigationClick,
            onPageSizeChange: this.onPageSizeChange,
            onNextPrevChange: this.onNextPrevChange,
            handleClick: this.handleClick
        };
        return (
            <FootballContext.Provider value={contextValues}>
                <HamburgerMenuComponent />
                <Navigation />
                <div className="contentContainer">
                    {currentView === "teams" ? <Teams /> : <Conferences />}
                    <PaginationFooter />
                </div>
            </FootballContext.Provider>
        );
    }
}

export default CollegeFootballApp;