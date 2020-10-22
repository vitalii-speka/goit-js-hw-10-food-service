import menuCardTpl from './templates/card-menu.hbs';
import '../src/css/styles.css';
// import throttle from 'lodash.throttle';
import menu from '../src/menu.json';

const menuRef = document.querySelector('.js-menu');
const markup = menuCardTpl(menu);
menuRef.insertAdjacentHTML('beforeend', markup);


const themeChenge = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

themeChenge.addEventListener('change', onThemeChenge)



function onThemeChenge(e) {
  e.preventDefault();
  setClassList();
  setLocalStorage();
}

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

function setClassList() {
  const check = themeChenge.checked
  if (check) {
      body.classList.add(Theme.DARK);
      body.classList.remove(Theme.LIGHT);
    } else {
      body.classList.add(Theme.LIGHT);
      body.classList.remove(Theme.DARK);
  }
}

function setLocalStorage() {
  const check = themeChenge.checked
  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } 
  else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  body.classList.add(Theme.DARK);
  themeChenge.checked = true;
}
