import {createDomElement, showScreen} from './util.js';
import statsElement from './stats.js';
import greetingElement from './greeting.js';
import {headerElement, backArrow} from './header.js';
import {level} from './data-structure.js';

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

const showNextScreen = () => {
  const gameAnswer = centralScreen.querySelectorAll(`.game__option`);
  gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
    showScreen(statsElement);
    centralScreen.insertAdjacentElement(`afterbegin`, headerElement);
  }));
};

backArrow.addEventListener(`click`, () => {
  showScreen(greetingElement);
});

export {element as gameThreeElement, showNextScreen as showStatsScreen};
