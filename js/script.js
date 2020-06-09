'use strict';

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

let a, b;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function filmsBase() {
    for(let i=0; i < numberOfFilms; i++) {

        a = prompt(`Введи свой ${i+1} фильм`, '');
    
        while(a == '' || +a == 0 || a.length > 50) {
            a = prompt(`Введи свой ${i+1} фильм нормально ёбана`, '');
        }
    
        b = +prompt('На сколько оцените его? Напиши от 1 до 10', '');
    
        while(b == 0 || isNaN(b) || (b < 1 || b > 10)) {
            b = +prompt('Че, охуел? Напиши от 1 до 10', '');
        }
    
        personalMovieDB.movies[a] = b;
    
    }
}

function detectPersonalGrade() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30 ) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

start();

filmsBase();

detectPersonalGrade();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for(let i = 0; i <=2; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres();

