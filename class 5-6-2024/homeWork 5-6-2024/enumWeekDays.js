var Weekday;
(function (Weekday) {
    Weekday[Weekday["Sunday"] = 0] = "Sunday";
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday";
})(Weekday || (Weekday = {}));
function getToday(day) {
    return day;
}
var today = new Date().getDay(); // Returns a number from 0 (Sunday) to 6 (Saturday)
console.log("Today is ".concat(Weekday[today], "."));
if (today === Weekday.Saturday || today === Weekday.Sunday) {
    console.log("It's the weekend!");
}
