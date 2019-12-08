import {createDomElement, showScreen} from './util.js';
import {gameOneElement, onGameAnswserClick, browseGameAnswers, gameOdin} from './game-1.js';
import greetingElement from './greeting.js';
import {headerElement, backArrow} from './header.js';
import {makeAScreenTemplate} from './screen.js';
import {level} from './data.js';

const template = `
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя" maxlength="25" pattern="\\s*" required>
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  <footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
  </footer>`;

const element = createDomElement(template);

const images = Array.from(level.questions.images);

const goButton = element.querySelector(`.rules__button`);
const centralScreen = document.querySelector(`.central`);
// const gameContent = gameElement.querySelector(`.game__content`);

// const wrapper = document.createElement(`div`);
// wrapper.className = `game__option`;
// wrapper.insertAdjacentHTML(`afterbegin`, screenElement);
// gameContent.insertAdjacentElement(`afterbegin`, wr);
// console.log(wrapper);
let gameAnswer;
goButton.addEventListener(`click`, (evt) => {
  gameOdin();
  // evt.preventDefault();
  // showScreen(gameOneElement);
  // centralScreen.insertAdjacentElement(`afterbegin`, headerElement);
  // gameAnswer = makeAScreenTemplate(images, gameOneElement, gameAnswer);
  // console.log(gameAnswer);
});

backArrow.addEventListener(`click`, () => {
  showScreen(greetingElement);
});

const userNameInput = element.querySelector(`.rules__input`);

userNameInput.addEventListener(`keyup`, (evt) => {
  if (!userNameInput.validity.valueMissing && userNameInput.validity.patternMismatch) {
    userNameInput.value = userNameInput.value.replace(/\s+/g, ` `);
    goButton.disabled = false;
  } else {
    goButton.disabled = true;
  }
});

export {element as rulesElement, gameAnswer};

