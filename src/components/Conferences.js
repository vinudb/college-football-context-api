import React from 'react';
import FootballContext , { useFootballContext } from '../context/footballContext';

const Conferences = ()=> {
    const {conferenceDisplay} = useFootballContext(FootballContext);

    return(
        <div>
            {
                conferenceDisplay.map((item, index)=><div key={index}>{item.name}</div>)
            }
        </div>
    );
}

export default Conferences;