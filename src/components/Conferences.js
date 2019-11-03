import React from 'react';
import FootballContext, { useFootballContext } from '../context/footballContext';

const Conferences = () => {
    const { display } = useFootballContext(FootballContext);
    return (
        <div>
            <div className="tableTitle">Conferences</div>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Abbr</th>
                        <th>Name</th>
                        <th>Short Name</th>
                    </tr>
                    {
                        display.displayList.map((conference, index) =>
                            <tr key={index}>
                                <td>{conference.abbreviation}</td>
                                <td>{conference.name}</td>
                                <td>{conference.short_name}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Conferences;