import React from 'react';
import FootballContext, { useFootballContext } from '../context/footballContext';

const Navigation = () => {
    const { open, onNavigationClick, currentView } = useFootballContext(FootballContext);
    return (
        <div className={open ? "open navigationMenuContainer" : "navigationMenuContainer"}>
            <div className="menuContainer">
                <div 
                    className={'menuItem ' + (currentView === 'teams' && 'menuSelected')} 
                    onClick={() => onNavigationClick("teams")}>Teams
                </div>
                <div 
                    className={'menuItem ' + (currentView === 'conferences' && 'menuSelected')} 
                    onClick={() => onNavigationClick("conferences")}>Conferences
                </div>
            </div>
        </div>
    );
}

export default Navigation;