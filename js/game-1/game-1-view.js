// import {createDomElement} from '../util.js';
// // import {subtractOneLife} from '../header/header.js';
// // import {activateSecondScreen} from '../game-2/game-2.js';
// import makeAScreenTemplate from '../screen.js';
// import {level, answersMap} from '../data-structure.js';
// import {gameResult} from '../game-result.js';

// import AbstractView from '../abstract-view.js';

// export default class GameOneView extends AbstractView {
//   get template() {
//     return `<div class="game">
//     <p class="game__task"></p>
//     <form class="game__content">
//     </form>
//     <div class="stats">
//       <ul class="stats">
//         <li class="stats__result stats__result--unknown"></li>
//         <li class="stats__result stats__result--unknown"></li>
//         <li class="stats__result stats__result--unknown"></li>
//         <li class="stats__result stats__result--unknown"></li>
//       </ul>
//     </div>
//   </div>`;
//   }

//   bind() {
//     const gameAnswer = this.element.querySelectorAll(`.game__answer > input`);

//     gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
//       this.onClick();
//     }));
//   }

//   onClick() {

//   }
// }

// // const element = createDomElement(template);
// // const centralScreen = document.querySelector(`.central`);
// // const images = Array.from(level[1].questions.images);
// // const numberOfGameScreen = 1;
// // let picture;

// // const activateScreen = () => {
// //   const gameAnswer = centralScreen.querySelectorAll(`.game__answer > input`);
// //   let clickCounterForLeftPicture = 0;
// //   let clickCounterForRightPicture = 0;
// //   gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
// //     const gameAnswerBackgroundImage = elem.nextElementSibling.currentStyle || window.getComputedStyle(elem.nextElementSibling, null);
// //     picture = elem.parentElement.parentElement.firstElementChild;
// //     let isCorrectAnswer;
// //     let showStats = false;

// //     answersMap.set(picture.src, {
// //       answer: gameAnswerBackgroundImage.backgroundImage,
// //       time: 2000
// //     });

// //     if (gameAnswer[0].checked || gameAnswer[1].checked) {
// //       ++clickCounterForLeftPicture;
// //       if (clickCounterForLeftPicture === 1 && answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
// //         subtractOneLife();
// //         isCorrectAnswer = false;
// //         gameResult(showStats, isCorrectAnswer, picture);
// //       } else if (clickCounterForLeftPicture === 1 && answersMap.get(picture.src).answer === level[numberOfGameScreen - 1].answers.get(picture.src)) {
// //         isCorrectAnswer = true;
// //         gameResult(showStats, isCorrectAnswer, picture);
// //       }
// //     }

// //     if (gameAnswer[2].checked || gameAnswer[3].checked) {
// //       ++clickCounterForRightPicture;
// //       if (clickCounterForRightPicture === 1 && answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
// //         subtractOneLife();
// //         isCorrectAnswer = false;
// //         gameResult(showStats, isCorrectAnswer, picture);
// //       } else if (clickCounterForRightPicture === 1 && answersMap.get(picture.src).answer === level[numberOfGameScreen - 1].answers.get(picture.src)) {
// //         isCorrectAnswer = true;
// //         gameResult(showStats, isCorrectAnswer, picture);
// //       }
// //     }

// //     if ((gameAnswer[0].checked || gameAnswer[1].checked) && (gameAnswer[2].checked || gameAnswer[3].checked)) {
// //       makeAScreenTemplate(images, numberOfGameScreen, activateSecondScreen);
// //     }
// //   }));
// // };

// // export {element as gameOneElement, activateScreen as activateFirstScreen};
