window.addEventListener('DOMContentLoaded', () => {

const tabContent = document.querySelectorAll('.tabcontent'),
      tab = document.querySelectorAll('.tabheader__item'),
      tabs = document.querySelector('.tabheader__items');

      function hideContent () {
        tabContent.forEach (i => {
            i.style.display = 'none';
        });

        tab.forEach (i => {
            i.classList.remove('tabheader__item_active');
        })
      };

      function showContent (i = 0) {
        tabContent[i].style.display = 'block';
        tab[i].classList.add('tabheader__item_active');
      }
      hideContent();
      showContent();

      tabs.addEventListener('click', (e)=> {
          const target = e.target;
          if (target && target.classList.contains('tabheader__item')) {
              tab.forEach((item, i) => {
                  if(target == item) {
                    hideContent();
                    showContent(i);
                  }
              })
          }
      })
});