import React from 'react';
import FootballContext , { useFootballContext } from '../context/footballContext';

const Teams = ()=> {
    const {teamsDisplay, conferenceMasterList, onConferenceFilterClick} = useFootballContext(FootballContext);

    return(
        <div>
            <select onChange={(e)=>onConferenceFilterClick(e.target.value)}>
                <option value="">By Conference</option>
                {
                    conferenceMasterList.map((item, index) =><option value={item.abbreviation} key={index}>{item.name}</option>)
                }
            </select>
            {
                teamsDisplay.map((item, index)=><div key={index}>{item.school}</div>)
            }
        </div>
    );
}

export default Teams;