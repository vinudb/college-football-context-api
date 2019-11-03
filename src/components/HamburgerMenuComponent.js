import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import FootballContext, { useFootballContext } from '../context/footballContext';

const HamburgerMenuComponent = () => {
    const { open, handleClick } = useFootballContext(FootballContext);
    return (
        <div className="hamburgerContainer">
            <HamburgerMenu
                isOpen={open}
                menuClicked={handleClick}
                width={25}
                height={15}
                strokeWidth={3}
                rotate={0}
                color='white'
                borderRadius={5}
                animationDuration={0.5}
            />
        </div>
    );
}

export default HamburgerMenuComponent;