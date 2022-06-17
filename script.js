document.querySelector('.button').addEventListener('click', fn);
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        while (numberOfFilms == '' || numberOfFilms == null ||isNaN(numberOfFilms)) {
            this.start();
        }
        this.count = numberOfFilms;
    },
    detectPersonaLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    movieQuestion: function() {
        let a = prompt('Один из последних фильмов?');
        let b = prompt('На сколько оценете его?');
        if (a == null || b == null || a == ''|| b == ''|| a.length > 50) {
            return this.movieQuestion();
        };
        return [a, b];
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    // writeYourGenres: function() {
    //     for (let i = 0; i < 3; i++) {
    //         function genreFn() {
    //             let genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
    //             if (genre === null|| genre === '') {
    //                 return genreFn();
    //             };
    //             return genre;
    //         }
    //         this.genres[i] = genreFn();;
    //     }
    //     // this.genres.forEach(function(el, index) {
    //     //     console.log(`Любимый жанр №${index + 1} это ${el}`)
    //     // })
    //     this.genres.forEach((el, index) => {
    //         console.log(`Любимый жанр #${index + 1} это ${el}`)
    //     })
    // },
    writeYourGenres: function() {
        function genreFn() {
            let genre = prompt(`Введите ваши любибые жанры через запятую?`);
            if (genre === null|| genre === '') {
                return genreFn();
            };
            return genre;
        }
        this.genres = genreFn().split(',');
        this.genres.forEach((el, index) => {
            console.log(`Любимый жанр №${index + 1} это ${el}`)
        })
    },
    toggleVisibleMyDb: function() {
        if (!this.privat) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    }
};
function fn() {
    personalMovieDB.start();
    personalMovieDB.detectPersonaLevel();
    for (let i = 0; i < 2; i++) {
        var codes = personalMovieDB.movieQuestion();
        personalMovieDB.movies[codes[0]] = codes[1];
    };
    personalMovieDB.showMyDB(personalMovieDB.privat);
    personalMovieDB.writeYourGenres();
    personalMovieDB.toggleVisibleMyDb();
    console.log(personalMovieDB);
}

// const a = prompt('Один из последних фильмов?'),
//       b = prompt('На сколько оценете его?'),
//       c = prompt('Один из последних фильмов?'),
//       d = prompt('На сколько оценете его?');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних фильмов?'),
//           b = prompt('На сколько оценете его?');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }  
// }
// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних фильмов?'),
//           b = prompt('На сколько оценете его?');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//     }     
// }
// do {
//     const a = prompt('Один из последних фильмов?'),
//           b = prompt('На сколько оценете его?');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//     }  
// } while (i < 2);

// function movieQuestion() {
//     let a = prompt('Один из последних фильмов?');
//     let b = prompt('На сколько оценете его?');
//     if (a == null || b == null || a == ''|| b == ''|| a.length > 50) {
//         movieQuestion();
//     }
//     return {a: a, b: b};
// }
// for (let i = 0; i < 2; i++) {
//     var codes = movieQuestion();
//     personalMovieDB.movies[codes.a] = codes.b;
// }
// console.log(personalMovieDB);





