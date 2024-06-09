//Loop through an array with for of
var myMovies = ["Avengers", "Spiderman", "Ironman"];
function my_movies() {
    for (var _i = 0, myMovies_1 = myMovies; _i < myMovies_1.length; _i++) {
        var movie = myMovies_1[_i];
        console.log(movie);
    }
}
my_movies();
