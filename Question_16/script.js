const season = prompt("Enter a month to find season and first letter should be uppercase");

if(season == "September" || season == "October" || season == "November") {
    console.log("Autumn")
}
else if(season == "December" || season == "January" || season == "February") {
    console.log("Winter");
}
else if(season == "March" || season == "April" || season == "May") {
    console.log("Spring");
}
else if(season == "June" || season == "July" || season == "August") {
    console.log("Summer");
}
else {
    console.log("Please enter valid month");
}