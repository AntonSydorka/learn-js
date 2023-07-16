`use strict`

const countOfFilms = +prompt('Count of film', '');

const personalMovieDB = {
    count: countOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastFilmTitle = prompt('What last film you see?', '');
let lastFilmRate = prompt('please rate this film', '');

let lastFilmTitle2 = prompt('What last film you see? (another)', '');
let lastFilmRate2 = prompt('please rate this film', '');

personalMovieDB.movies[lastFilmTitle] = lastFilmRate;
personalMovieDB.movies[lastFilmTitle2] = lastFilmRate2;

console.log(personalMovieDB);