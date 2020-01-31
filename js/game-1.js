import {createDomElement, showScreen} from './util.js';
import {gameTwoElement, showNextScreen} from './game-2.js';
import statsElement from './stats.js';
import {headerElement, subtractOneLife, onBackArrowClick} from './header.js';
import {initialState, level, answersMap} from './data-structure.js';
import makeAScreenTemplate from './screen.js';

const template = `
    <div class="game">
    <p class="game__task">${level[0].description}</p>
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

const element = createDomElement(template);
const centralScreen = document.querySelector(`.central`);
const images = Array.from(level[1].questions.images);
const numberOfGameScreen = 1;

const browseGameAnswers = () => {
  const gameAnswer = centralScreen.querySelectorAll(`.game__answer > input`);

  gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
    const gameAnswerBackgroundImage = elem.nextElementSibling.currentStyle || window.getComputedStyle(elem.nextElementSibling, null);
    const picture = elem.parentElement.parentElement.firstElementChild;

    answersMap.set(picture.src, {
      answer: gameAnswerBackgroundImage.backgroundImage,
      time: 10000
    });

    if (answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
      subtractOneLife();
      if (initialState.lives === 0) {
        showNextScreen(statsElement);
        // Запустить статистику со словом поражение, а пока победа
      }
    }

    console.log(answersMap);
    if ((gameAnswer[0].checked || gameAnswer[1].checked) && (gameAnswer[2].checked || gameAnswer[3].checked)) {
      showScreen(gameTwoElement);
      centralScreen.insertAdjacentElement(`afterbegin`, headerElement);
      makeAScreenTemplate(images, gameTwoElement, numberOfGameScreen, showNextScreen);
    }
  }));
};

onBackArrowClick();
// backArrow.addEventListener(`click`, () => {
//   showScreen(greetingElement);
//   refreshLifes();
// });

export {element as gameOneElement, browseGameAnswers};
