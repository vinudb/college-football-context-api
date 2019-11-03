export const getTotalPages = ({teamsMasterList, conferenceMasterList, currentView, pageSize})=>{
    const masterList = currentView === "teams" ? teamsMasterList : conferenceMasterList;
    return Math.ceil(masterList.length / pageSize);
}

export const getTotalCount = ({teamsMasterList, conferenceMasterList, currentView})=>{
    return currentView === "teams" ? teamsMasterList.length : conferenceMasterList.length;
}

export const selector = ({ teamsMasterList, conferenceMasterList, page, pageSize, currentView })=>{
    const masterList = currentView === "teams" ? teamsMasterList : conferenceMasterList;
    const startCount = (page - 1) * pageSize;
    const endCount = (page * pageSize);
    const displayArray = masterList.slice(startCount, endCount);
    return displayArray;
}