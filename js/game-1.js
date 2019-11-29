import {createDomElement, showScreen} from './util.js';
import gameTwoElement from './game-2.js';
import greetingElement from './greeting.js';
import {headerElement, backArrow} from './header.js';
import {level} from './data.js';
import {makeAScreenTemplate} from './screen.js';
import {gameAnswer} from './rules.js';


const template = `
    <div class="game">
    <p class="game__task">${level.description}</p>
    <form class="game__content">

    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
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

//   <div class="game__option">
//   <img src=${Array.from(level.questions.images)[0]} alt="Option 1" width=${level.questions.imagesSizes.width} height=${level.questions.imagesSizes.height}>
//   <label class="game__answer game__answer--photo">
//     <input name="question1" type="radio" value="photo">
//     <span>Фото</span>
//   </label>
//   <label class="game__answer game__answer--paint">
//     <input name="question1" type="radio" value="paint">
//     <span>Рисунок</span>
//   </label>
// </div>
// <div class="game__option">
//   <img src=${Array.from(level.questions.images)[1]} alt="Option 2" width=${level.questions.imagesSizes.width} height=${level.questions.imagesSizes.height}>
//   <label class="game__answer  game__answer--photo">
//     <input name="question2" type="radio" value="photo">
//     <span>Фото</span>
//   </label>
//   <label class="game__answer  game__answer--paint">
//     <input name="question2" type="radio" value="paint">
//     <span>Рисунок</span>
//   </label>
//   </div>
const element = createDomElement(template);
const centralScreen = document.querySelector(`.central`);
// console.log(gameAnswer);

const onGameAnswserClick = () => {

  if ((gameAnswer[0].checked || gameAnswer[1].checked) && (gameAnswer[2].checked || gameAnswer[3].checked)) {
    showScreen(gameTwoElement);
    centralScreen.insertAdjacentHTML(`afterbegin`, headerElement);
    console.log(gameAnswer);

  }
};

const browseGameAnswers = () => {
  gameAnswer.forEach((elem) => elem.addEventListener(`click`, onGameAnswserClick));
};

backArrow.addEventListener(`click`, () => {
  showScreen(greetingElement);
});

const showGameOneScreen = (evt) => {
  evt.preventDefault();
  showScreen(element);
  centralScreen.insertAdjacentElement(`afterbegin`, headerElement);
  const images = Array.from(level.questions.images);
  makeAScreenTemplate(images, element);
  gameAnswer = document.querySelectorAll(`.game__answer > input`);
  console.log(gameAnswer);
};

export {element as gameOneElement, onGameAnswserClick, browseGameAnswers};
