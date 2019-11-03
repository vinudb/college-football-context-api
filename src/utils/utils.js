export const selector = ({ teams, conferences, display, currentView }) => {
    const { pageNumber, pageSize } = display.page;
    const masterList = currentView === "teams" ? teams : conferences;
    const startCount = (pageNumber - 1) * pageSize;
    const endCount = (pageNumber * pageSize) < masterList.length ? (pageNumber * pageSize) : masterList.length;
    const displayList = masterList.slice(startCount, endCount);

    const response = {
        displayList,
        page: {
            pageNumber,
            pageSize,
            totalPages: Math.ceil(masterList.length / pageSize),
            startCount: startCount + 1,
            endCount,
            totalCount: masterList.length
        }
    }
    return response;
}