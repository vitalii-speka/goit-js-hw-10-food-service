import menuCardTpl from './templates/card-menu.hbs';
import '../src/css/styles.css';
// import throttle from 'lodash.throttle';
import menu from '../src/menu.json';

const menuRef = document.querySelector('.js-menu');
const markup = menuCardTpl(menu);
const themeChenge = document.querySelector('#theme-switch-toggle');
const valueSwitchToggle = document.querySelector('theme-switch__toggle');

menuRef.insertAdjacentHTML('beforeend', markup);

themeChenge.addEventListener('change', onThemeChenge)


function onThemeChenge(e) {
    e.preventDefault();
    addClassList()
    console.log(valueSwitchToggle)
    console.log(e)

}

function addClassList() {
    document.querySelector('body').classList.add(Theme.LIGHT);
    document.querySelector('body').classList.toggle(Theme.DARK);

//   document.querySelector('body').classList.replace(Theme.LIGHT, Theme.DARK);
}

// console.log(themeChenge);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

console.log(Theme);

console.dir(menuCardTpl);
