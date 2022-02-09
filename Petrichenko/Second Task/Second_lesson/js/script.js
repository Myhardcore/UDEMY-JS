/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//Первое задание
let adv = document.querySelectorAll('.promo__adv img');

adv.forEach(item => {
    item.remove();
});

//Второе задание
let genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма';

//Третье задание
document.querySelector('.promo__bg').style.backgroundImage = 'url(../img/bg.jpg)';

// Четвертое задание

let watched = document.querySelector('.adding__input');
let form = document.querySelector('.add');

form.addEventListener('submit', event => {
    event.preventDefault();
    if (watched.value.length > 21) {
        movieDB.movies.push(`${watched.value.slice(0,21)}...`);
    } else {
        movieDB.movies.push(watched.value);
    }
    
    lohPidr(ul, movieDB.movies);
    watched.value = '';
    watched.focus();

    

});



document.querySelectorAll('.promo__interactive-list li').forEach(value => {
    value.remove(); 
    
});


let ul = document.querySelector('.promo__interactive-list');
function lohPidr(films, parent){

    films.innerHTML = '';
    parent.sort().forEach((item, i) => {
    
        films.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${item}
            <div class="delete"></div>
        </li>
        `;             
        let deleteBtn = document.querySelectorAll('.delete');
        deleteBtn.forEach((button, i) => {
            button.addEventListener('click', function(){
                button.parentElement.remove();
                movieDB.movies.splice(i, 1);
                lohPidr(ul, movieDB.movies);
            });
        })

    });

    let check = document.querySelector('input[type = "checkbox"]');
    if (check.checked) {
        console.log ('Добавляем любимый фильм')
    };
   
}


lohPidr(ul, movieDB.movies);





// НОВЫЙ УРОК

//1 task