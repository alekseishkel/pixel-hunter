import {createDomElement} from './util.js';
import {activateSecondScreen} from './game-2.js';
import {subtractOneLife} from './header.js';
import {level, answersMap} from './data-structure.js';
import makeAScreenTemplate from './screen.js';
import {gameResult} from './game-result.js';

const template = `
  <div class="game">
    <p class="game__task"></p>
    <form class="game__content">
    </form>
    <div class="stats">
      <ul class="stats">
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
let picture;

const activateScreen = () => {
  const gameAnswer = centralScreen.querySelectorAll(`.game__answer > input`);
  let clickCounterForLeftPicture = 0;
  let clickCounterForRightPicture = 0;
  gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
    const gameAnswerBackgroundImage = elem.nextElementSibling.currentStyle || window.getComputedStyle(elem.nextElementSibling, null);
    picture = elem.parentElement.parentElement.firstElementChild;
    let isCorrectAnswer;

    answersMap.set(picture.src, {
      answer: gameAnswerBackgroundImage.backgroundImage,
      time: 2000
    });

    if (gameAnswer[0].checked || gameAnswer[1].checked) {
      ++clickCounterForLeftPicture;
      if (clickCounterForLeftPicture === 1 && answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
        subtractOneLife();
        isCorrectAnswer = false;
        gameResult(isCorrectAnswer, picture);
      } else if (clickCounterForLeftPicture === 1 && answersMap.get(picture.src).answer === level[numberOfGameScreen - 1].answers.get(picture.src)) {
        isCorrectAnswer = true;
        gameResult(isCorrectAnswer, picture);
      }
    }

    if (gameAnswer[2].checked || gameAnswer[3].checked) {
      ++clickCounterForRightPicture;
      if (clickCounterForRightPicture === 1 && answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
        subtractOneLife();
        isCorrectAnswer = false;
        gameResult(isCorrectAnswer, picture);
      } else if (clickCounterForRightPicture === 1 && answersMap.get(picture.src).answer === level[numberOfGameScreen - 1].answers.get(picture.src)) {
        isCorrectAnswer = true;
        gameResult(isCorrectAnswer, picture);
      }
    }

    if ((gameAnswer[0].checked || gameAnswer[1].checked) && (gameAnswer[2].checked || gameAnswer[3].checked)) {
      makeAScreenTemplate(images, numberOfGameScreen, activateSecondScreen);
    }
  }));
};

export {element as gameOneElement, activateScreen as activateFirstScreen, picture as pictureOne};
