// Задачи: 1. Функция, которая будет скрывать ненужные табы 2. Показать нужный таб 3. Назначить обработчики событий на меню, которые будут манипулировать функциями.

window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

          function hideTabContent () {
              tabsContent.forEach (item => {
                  item.style.display = 'none';
              });

              tabs.forEach(item => {
                  item.classList.remove('tabheader__item_active');
              })
          };

          function showTabContent(i = 0) {
              tabsContent[i].style.display = 'block';
              tabs[i].classList.add('tabheader__item_active');
          };

          hideTabContent();
          showTabContent(0);

          tabsParent.addEventListener('click', (e) => {
              const target = e.target;

              if(target && target.classList.contains('tabheader__item')) {
                  tabs.forEach((item,i) => {
                      if (target == item) {
                          hideTabContent();
                          showTabContent(i);
                      };
                  });
                };
          })
});











