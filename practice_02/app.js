`use strict`

const countOfFilms = +prompt('Count of film', '');

if(countOfFilms < 10) {
    alert('you need watch more movie');
} else if(countOfFilms >= 10 && countOfFilms < 30) {
    alert('you\'re classic movie watcher');
} else if(countOfFilms >= 30) {
    alert('alert!!! you\'re movie maniac');
} else {
    alert('warning: error');
}

const personalMovieDB = {
    count: countOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for(let i = 0; i < 2; i++) {
    let title = prompt('enter movie title', '');
    let rate = prompt(`please rate ${title} from 0 - 10`, 0);

    if(title != null && rate !== null && title != '' && rate != '' && rate != 0 && title.length < 50) {
        personalMovieDB.movies[title] = rate;
        continue;
    }

    i--;
}

console.log(personalMovieDB);