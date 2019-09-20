import {showScreen} from './util.js';
import element from './greeting.js';

const asterisk = document.querySelector(`.intro__asterisk`);

asterisk.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  showScreen(element);
});

  // const greeting = document.getElementById(`greeting`).content;
  // const rules = document.getElementById(`rules`).content;
  // const game1 = document.getElementById(`game-1`).content;
  // const game2 = document.getElementById(`game-2`).content;
  // const game3 = document.getElementById(`game-3`).content;
  // const stats = document.getElementById(`stats`).content;

  // const screens = [greeting, rules, game1, game2, game3, stats];

  // // const RIGHT_ARROW_KEYCODE = 39;
  // // const LEFT_ARROW_KEYCODE = 37;

  // const centralScreen = document.querySelector(`.central`);

  // const showScreen = (screenNumber) => {
  //   while (centralScreen.firstChild) {
  //     centralScreen.removeChild(centralScreen.firstChild);
  //   }
  //   centralScreen.appendChild(screens[screenNumber].cloneNode(true));
  // };

  // let currentScreen = 1;
  // showScreen(currentScreen);

  // document.body.insertAdjacentHTML(`beforeend`,
  //     `<div class="arrows__wrap">
  // <style>
  // .arrows__wrap {
  //   position: absolute;
  //   top: 95px;
  //   left: 50%;
  //   margin-left: -56px;
  // }
  // .arrows__btn {
  //   background: none;
  //   border: 2px solid black;
  //   padding: 5px 20px;
  // }
  // </style>
  //   <button class="arrows__btn"><-</button>
  //   <button class="arrows__btn">-></button>
  // </div>`);

  // const arrows = document.querySelectorAll(`.arrows__btn`);

  // const showNextScreen = () => {
  //   if (currentScreen < screens.length - 1) {
  //     ++currentScreen;
  //     showScreen(currentScreen);
  //   }
  // };

  // const showPreviousScreen = () => {
  //   if (currentScreen > 0) {
  //     --currentScreen;
  //     showScreen(currentScreen);
  //   }
  // };

  // arrows[0].addEventListener(`click`, (evt) => {
  //   evt.preventDefault();
  //   showPreviousScreen();
  // });

  // arrows[1].addEventListener(`click`, (evt) => {
  //   evt.preventDefault();
  //   showNextScreen();
  // });

  // document.addEventListener(`keydown`, (evt) => {
  //   if (evt.keyCode === LEFT_ARROW_KEYCODE) {
  //     evt.preventDefault();
  //     showPreviousScreen();
  //   }
  // });

  // document.addEventListener(`keydown`, (evt) => {
  //   if (evt.keyCode === RIGHT_ARROW_KEYCODE) {
  //     evt.preventDefault();
  //     showNextScreen();
  //   }
  // });
