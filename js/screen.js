import {level} from './data.js';


const makeAScreenTemplate = (arr, gameElement) => {
  arr.forEach((elem, index) => {
    let screenTemplate = `
        <img src=${elem} alt="Option ${index + 1}" width=${level.questions.imagesSizes.width} height=${level.questions.imagesSizes.height}>
        <label class="game__answer game__answer--photo">
          <input name="question${index + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${index + 1}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>`;
    const wrapper = document.createElement(`div`);
    wrapper.className = `game__option`;
    wrapper.insertAdjacentHTML(`afterbegin`, screenTemplate);
    const gameContent = gameElement.querySelector(`.game__content`);
    gameContent.insertAdjacentElement(`beforeend`, wrapper);

  });
  // gameAnswer = document.querySelectorAll(`.game__answer > input`);
  // console.log(gameAnswer);
  // return gameAnswer;
};
console.log(makeAScreenTemplate);

// const wr = makeAScreenTemplate(images);
// console.log(wr);
// const gameAnswer = gameAnswer.querySelectorAll(`.game__answer > input`);

export {makeAScreenTemplate};
