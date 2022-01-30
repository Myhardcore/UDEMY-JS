

let numberOfFilms;

function start (){
    numberOfFilms = +prompt ('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN (numberOfFilms)) {
    numberOfFilms = +prompt ('Сколько фильмов вы посмотрели?', '');
}
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let a = prompt('Один из последних просмотренных фильмов?'),
//     b = prompt('На сколько оцените его?'),
//     c = prompt('Один из последних просмотренных фильмов?'),
//     d = prompt('На сколько оцените его?');

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?'), 
            b = prompt('На сколько оцените его?');
    
            
    
        if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--
        }
        
    }

}
rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10){
        alert ('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert ('Вы классический зритель')
    } else {
        alert ('Вы киноман')
    }
}

detectPersonalLevel();

function showMyDB1 (){
    if (personalMovieDB['privat'] == false){
        console.log(personalMovieDB);
    }
}
// showMyDB1();

function showMyDB2 (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB2 (personalMovieDB.privat);


function writeYourGenres (){
    for (let i = 1; i <= 3 ; i++) {
        
        let c = prompt (`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i-1] = c;
        
    }
}
writeYourGenres();


let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
}

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    

}
