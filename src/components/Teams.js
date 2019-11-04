import React from 'react';
import FootballContext, { useFootballContext } from '../context/footballContext';
import Loading from './Loading';

const Teams = () => {
    const { display, conferences, onConferenceSelect } = useFootballContext(FootballContext);
    return (
        <div data-test="teamsComponent">
            <div className="tableTitle">Teams</div>
            <select data-test="conferenceSelect" className="select" onChange={(e) => onConferenceSelect(e.target.value)}>
                <option value="">Filter By Conference</option>
                {
                    conferences.map((conference, index) =>
                        <option key={index} value={conference.abbreviation}>{conference.name}</option>)
                }
            </select>

            <table className="table">
                <tbody>
                    <tr>
                        <th>Abbr</th>
                        <th>School</th>
                        <th>Mascot</th>
                        <th>Division</th>
                        <th>Conference</th>
                    </tr>
                    {
                        display.displayList.map((team, index) =>
                            <tr key={index}>
                                <td>{team.abbreviation}</td>
                                <td>{team.school}</td>
                                <td>{team.mascot || `-`}</td>
                                <td>{team.division || `-`}</td>
                                <td>{team.conference || `-`}</td>
                            </tr>)
                    }
                </tbody>
            </table>
            <Loading />
        </div>
    );
}

export default Teams;