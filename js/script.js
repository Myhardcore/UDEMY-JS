


let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let lastFilm = prompt('Один из просмотренных фильмов?');
let filmRating = prompt('На сколько оцените его?');

let personalMovieDb = {
    count: numberOfFilms,
    movies: {[lastFilm]: filmRating},
    actors: {},
    genres: [],
    privat: false
}


console.log(personalMovieDb)