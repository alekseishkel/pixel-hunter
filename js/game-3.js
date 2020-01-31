import {createDomElement, showScreen} from './util.js';
import statsElement from './stats.js';
import greetingElement from './greeting.js';
import {headerElement, subtractOneLife, onBackArrowClick} from './header.js';
import {initialState, level, answersMap} from './data-structure.js';

const template = `
  <div class="game">
    <p class="game__task">${level[1].description}</p>
    <form class="game__content  game__content--triple">
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
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
const numberOfGameScreen = 3;

const showNextScreen = () => {
  const gameAnswer = centralScreen.querySelectorAll(`.game__option`);
  gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
    if (level[numberOfGameScreen - 1].answers.get(elem.firstElementChild.src)) {
      answersMap.set(elem.firstElementChild.src, {
        answer: true,
        time: 10000
      });
    } else {
      answersMap.set(elem.firstElementChild.src, {
        answer: false,
        time: 10000
      });
    }

    if (answersMap.get(elem.firstElementChild.src).answer !== level[numberOfGameScreen - 1].answers.get(elem.firstElementChild.src)) {
      subtractOneLife();
      if (initialState.lives === 0) {
        showNextScreen(statsElement);
        // Запустить статистику со словом поражение, а пока победа
      }
    }

    console.log(answersMap);

    showScreen(statsElement);
    centralScreen.insertAdjacentElement(`afterbegin`, headerElement);
  }));
};

onBackArrowClick();

export {element as gameThreeElement, showNextScreen as showStatsScreen};
