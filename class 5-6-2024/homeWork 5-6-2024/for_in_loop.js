//enumerate properties with for in loop
var bmw = {
    brand: "BMW",
    model: "X5",
    year: 2020,
};
for (var key in bmw) {
    if (key.hasOwnProperty(bmw)) { }
    console.log(key, ":", bmw[key]);
}
