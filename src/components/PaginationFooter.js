import React from 'react';
import FootballContext , { useFootballContext } from '../context/footballContext';

const PaginationFooter = ()=> {
    const {onNextPreviousClick, onPageSizeClick, currentViewTotalPages, page} = useFootballContext(FootballContext);

    return(
        <div>
            <div>{`${page} of ${currentViewTotalPages}`}</div>
            <button onClick={()=>onNextPreviousClick(-1)} disabled={page===1}>Previous</button>
            <button onClick={()=>onNextPreviousClick(1)} disabled={page===currentViewTotalPages}>Next</button>
            <select onChange={(e)=>onPageSizeClick(e.target.value)}>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
            </select>
        </div>
    );
}

export default PaginationFooter;