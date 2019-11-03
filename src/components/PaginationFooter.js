import React from 'react';
import FootballContext , { useFootballContext } from '../context/footballContext';

const PaginationFooter = ()=> {
    const {onPageSizeChange, onNextPrevChange, display} = useFootballContext(FootballContext);
    const {pageNumber, totalPages, startCount, endCount, totalCount} = display.page;

    return(
        <div className="tableFooterContainer">
            <select className="select selectFooter" onChange={(e)=>onPageSizeChange(e.target.value)}>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
            </select>
            <div className="footerText">{`${startCount} - ${endCount} of ${totalCount}`}</div>
            <div>
                <button 
                    className="footerButtons" 
                    onClick={()=>onNextPrevChange(-1)} 
                    disabled={pageNumber===1}>{`<`}
                </button>
                <button 
                    className="footerButtons" 
                    onClick={()=>{onNextPrevChange(1)}} 
                    disabled={pageNumber===totalPages}>{`>`}
                </button>
            </div>
        </div>
    );
}

export default PaginationFooter;