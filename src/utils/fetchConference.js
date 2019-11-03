const url = "https://api.collegefootballdata.com/conferences"
const fetchConference = async ()=>{
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json()
        return data;
    } else {
        throw new Error('Unable to fetch teams')
    }
}

export default fetchConference;