const url = "https://api.collegefootballdata.com/teams?conference="
const fetchTeams = async (conference="")=>{
    const response = await fetch(`${url}${conference}`);
    if (response.status === 200) {
        const data = await response.json()
        return data;
    } else {
        throw new Error('Unable to fetch teams')
    }
}

export default fetchTeams;