



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function (){
        personalMovieDB.count = +prompt ('Сколько фильмов вы посмотрели?', '');
    
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN (personalMovieDB.count)) {
            personalMovieDB.count = +prompt ('Сколько фильмов вы посмотрели?', '');
    }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?'), 
                b = prompt('На сколько оцените его?');
        
                
        
            if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--
            }
            
        }
    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            alert ('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            alert ('Вы классический зритель')
        } else {
            alert ('Вы киноман')
        }
    },
    showMyDB: function(hidden) {
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function (){
        for (let i = 1; i <= 3 ; i++) {
            
            let c = prompt (`Ваш любимый жанр под номером ${i}`)
            if (c == null || c == '') {
                i--;
            } else {
                personalMovieDB.genres[i-1] = c;
            }       
            
        }
        personalMovieDB.genres.forEach(function(item, i){
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
            }) 
        }
    
};

