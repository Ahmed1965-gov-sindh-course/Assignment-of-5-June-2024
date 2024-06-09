// Exercise # 6
enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function getToday(day: number): Weekday {
    return day;
}

const today = new Date().getDay(); // Returns a number from 0 (Sunday) to 6 (Saturday)

console.log(`Today is ${Weekday[today]}.`);

if (today === Weekday.Saturday || today === Weekday.Sunday) {
    console.log("It's the weekend!");
}else{
    console.log("It's a weekday!");
}
