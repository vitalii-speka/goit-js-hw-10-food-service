import menuCardTpl from './templates/card-menu.hbs';
// import templateFunction from '/templates/color-card.hbs';
// document.body.innerHTML = templateFunction();
import '../src/css/styles.css';
// import throttle from 'lodash.throttle';
// import colorCardTpl from '.src/templates/color-card.hbs';

import menu from '../src/menu.json';

const menuRef = document.querySelector('.js-menu');

const markup = menuCardTpl(menu);
menuRef.insertAdjacentHTML('beforeend', markup);
console.log(menuRef);

console.dir(menuCardTpl);
console.dir(ingredients);