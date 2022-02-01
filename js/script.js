



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
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
    writeYourGenres: function (){
        for (let i = 1; i <= 3 ; i++) {
            
            let c = prompt (`Ваш любимый жанр под номером ${i}`)
            personalMovieDB.genres[i-1] = c;
            
        }
    }
    
};


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
