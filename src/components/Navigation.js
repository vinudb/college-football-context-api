import React from 'react';
import FootballContext , { useFootballContext } from '../context/footballContext';

const Navigation = ()=> {
    const {setCurrentView} = useFootballContext(FootballContext);

    return(
        <div>
            <button onClick={()=>setCurrentView("teams")}>Teams</button>
            <button onClick={()=>setCurrentView("conferences")}>Conferences</button>
        </div>
    );
}

export default Navigation;