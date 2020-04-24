import {createDomElement} from '../util.js';
// import {subtractOneLife} from '../header/header.js';
// import {activateSecondScreen} from '../game-2/game-2.js';
import makeAScreenTemplate from '../screen.js';
import {level, answersMap} from '../data-structure.js';
import {gameResult} from '../game-result.js';
const numberOfGameScreen = 2;
const images = Array.from(level[numberOfGameScreen - 1].questions.images);
import AbstractView from '../abstract-view.js';

export default class GameTwoView extends AbstractView {
  get template() {
    return `<div class="game">
    <p class="game__task"></p>
    <form class="game__content">
    <div class="game__option">
      <img src=${images[0]} alt="Option 1" width=${level[numberOfGameScreen - 1].questions.imagesSizes.width}>
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;
  }

  changeImagesSizes() {
    const gameOptions = this.element.querySelectorAll(`.game__option > img`);
    console.log(gameOptions);
    gameOptions.forEach((image) => {
      image.onload = () => {
        const realWidth = image.naturalWidth;
        const realHeight = image.naturalHeight;
        let imageWidth;
        console.log(realWidth, realHeight);
        if (realWidth >= realHeight) {
          imageWidth = level[numberOfGameScreen - 1].questions.imagesSizes.width;
        } else {
          imageWidth = level[numberOfGameScreen - 1].questions.imagesSizes.height * realWidth / realHeight;
        }

        image.width = imageWidth;
      };
    });
  }

  bind() {
    const gameAnswer = this.element.querySelectorAll(`.game__answer > input`);
    gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
      this.onClick();
    }));
  }

  onClick() {

  }

}

// import {subtractOneLife} from './header.js';
// import {activateThirdScreen} from './game-3.js';
// import makeAScreenTemplate from './screen.js';
// import {initialState, level, answersMap} from './data-structure.js';
// import {gameResult} from './game-result.js';

// const images = Array.from(level[2].questions.images);
// const numberOfGameScreen = 2;

// const activateScreen = () => {
//   const gameAnswer = document.querySelectorAll(`.game__answer > input`);
//   gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
//     const gameAnswerBackgroundImage = elem.nextElementSibling.currentStyle || window.getComputedStyle(elem.nextElementSibling, null);
//     const picture = elem.parentElement.parentElement.firstElementChild;
//     let isCorrectAnswer;
//     let showStats;

//     answersMap.set(picture.src, {
//       answer: gameAnswerBackgroundImage.backgroundImage,
//       time: 15000
//     });

//     if (answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
//       subtractOneLife();
//       isCorrectAnswer = false;
//       showStats = false;
//       gameResult(showStats, isCorrectAnswer, picture);
//     } else {
//       isCorrectAnswer = true;
//       showStats = false;
//       gameResult(showStats, isCorrectAnswer, picture);
//     }

//     if (initialState.lives === 0) {
//       showStats = true;
//       gameResult(true);
//     } else {
//       makeAScreenTemplate(images, numberOfGameScreen, activateThirdScreen);
//     }
//   }));
// };

// export {activateScreen as activateSecondScreen};
