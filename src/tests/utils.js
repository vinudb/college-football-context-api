export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const conferenceDisplayList = [
    {id: 1, name: "ACC", short_name: "Atlantic Coast Conference", abbreviation: "ACC"},
    {id: 4, name: "Big 12", short_name: "Big 12 Conference", abbreviation: "B12"},
    {id: 5, name: "Big Ten", short_name: "Big Ten Conference", abbreviation: "B1G"}
]

export const teamsDisplayList = [
    {school: "Abilene Christian", mascot: "Wildcats", abbreviation: "ACU", conference: null, division: null},
    {school: "Adams State", mascot: "Grizzlies", abbreviation: "ADST", conference: null, division: null},
    {school: "Adrian", mascot: "Bulldogs", abbreviation: "ADR", conference: null, division: null}
]