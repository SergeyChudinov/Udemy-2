// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt('Один из последних фильмов?'),
//       b = prompt('На сколько оценете его?'),
//       c = prompt('Один из последних фильмов?'),
//       d = prompt('На сколько оценете его?');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

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
// if (personalMovieDB.count < 10) {
//     alert('Просмотрено мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     alert('Вы киноман');
// } else {
//     alert('Произошла ошибка');
// }
// console.log(personalMovieDB);

// let a;
// let b;
// function movieQuestion() {
//     a = prompt('Один из последних фильмов?');
//     b = prompt('На сколько оценете его?');
//     if (a == null || b == null || a == ''|| b == ''|| a.length > 50) {
//         movieQuestion();
//     }
//     return [a, b];
// }
// for (let i = 0; i < 2; i++) {
//     var codes = movieQuestion();
//     personalMovieDB.movies[codes[0]] = codes[1];
// }

// function movieQuestion() {
//     a = prompt('Один из последних фильмов?');
//     b = prompt('На сколько оценете его?');
//     if (a == null || b == null || a == ''|| b == ''|| a.length > 50) {
//         movieQuestion();
//     }
//     return {a: a, b: b};
// }
// for (let i = 0; i < 2; i++) {
//     var codes = movieQuestion();
//     personalMovieDB.movies[codes.a] = codes.b;
// }

function abc(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d > 0) {
        const x1 = ((-1 * b) + Math.sqrt(d)) / (2 * a);
        const x2 = ((-1 * b) - Math.sqrt(d)) / (2 * a);
        console.log(`x1 равен ${x1}, х2 равен ${x2}`);
    };
    if (d == 0) {
        const x = (-1 * b) / (2 * a);
        console.log(`x равен ${x}`);
    }
    if (d < 0) {
        console.log('Уравнение не имеет корней');
    }
}
abc(5, 0, 30);
