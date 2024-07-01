enum seasons{
    "Fall",
    "Winter",
    "Spring",
    "Summer"
}

function whichMonths(season: seasons) {
    let monthsInSeason: string;
    switch (season) {
        case seasons.Fall :
            monthsInSeason = "September to November";
            break;
        case seasons.Winter:
            monthsInSeason = "December to February";
            break;
        case seasons.Spring:
            monthsInSeason = "March to May";
            break;
        case seasons.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths(seasons.Fall));

/* ORIGINAL


function whichMonths(season) {
    let monthsInSeason: string;
    switch (season) {
        case "Fall":
            monthsInSeason = "September to November";
            break;
        case "Winter":
            monthsInSeason = "December to February";
            break;
        case "Spring":
            monthsInSeason = "March to May";
            break;
        case "Summer":
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths("Fall"));


*/