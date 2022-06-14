// let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     while (numberOfFilms == '' || numberOfFilms == null ||isNaN(numberOfFilms)) {
//         start();
//     }
// }
// start()
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

// function detectPersonaLevel() {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// }
// detectPersonaLevel()

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
// console.log(personalMovieDB);

// function abc(a, b, c) {
//     let d = Math.pow(b, 2) - 4 * a * c;
//     if (d > 0) {
//         const x1 = ((-1 * b) + Math.sqrt(d)) / (2 * a);
//         const x2 = ((-1 * b) - Math.sqrt(d)) / (2 * a);
//         console.log(`x1 равен ${x1}, х2 равен ${x2}`);
//     };
//     if (d == 0) {
//         const x = (-1 * b) / (2 * a);
//         console.log(`x равен ${x}`);
//     }
//     if (d < 0) {
//         console.log('Уравнение не имеет корней');
//     }
// }
// abc(5, 0, 30);

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// };
// showMyDB(personalMovieDB.privat);
// let writeYourGenres = function () {
//     for (let i = 1; i < 4; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}?`);
//         personalMovieDB.genres.push(genre)
//     }
// }
// writeYourGenres();

// const options = {
//     name: 'test',
//     width: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// }
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }  
// }

// const arr = [2, 10, 13, 8, 26, 20];
// console.log(arr.sort(function(a, b) {
//     return a - b;
// }))

// const array = [1,3,5];
// const newArray = [...array];
// newArray[2] = 10;
// console.log(array);
// console.log(newArray);
const obj = {
    one: 1,
    two: 2
};
const newObj = {...obj};
newObj.two = 4;
console.log(obj);
console.log(newObj);


