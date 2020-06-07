'use strict';

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

while(numberOfFilms == 0 || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt(`Введите корректное значение`);
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let a, b;

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

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30 ) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


console.log(personalMovieDB);

