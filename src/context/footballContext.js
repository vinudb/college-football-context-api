import React, {useContext} from 'react';

const FootballContext = React.createContext();

export default FootballContext;
export const useFootballContext = () => useContext(FootballContext);