import {level} from './data.js';

const images = Array.from(level.questions.images);

const makeAScreenTemplate = (arr) => {
  let screenElement = document.createElement(`div`);
  let screenTemplate = ``;
  arr.forEach((elem, index) => {
    let screenTemplate = `
        <img src=${images[index]} alt="Option 1" width=${level.questions.imagesSizes.width} height=${level.questions.imagesSizes.height}>
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>`;
    // const wrapper = document.createElement(`div`);
    // wrapper.className = `game__option`;
    // wrapper.insertAdjacentHTML(`afterbegin`, screenTemplate);
    // screenElement.appendChild(wrapper);
    // console.log(gameContent);
    // const wrapper = document.createTextNode(screenTemplate);
    // screenElement += wrapper;
    // console.log(screenElement);
    screenElement.insertAdjacentHTML(`afterbegin`, screenTemplate);
    screenTemplate += screenElement;
    console.log(screenElement);
    console.log(screenTemplate);

  });
  return screenElement;

};
const wr = makeAScreenTemplate(images);

// const wr = makeAScreenTemplate(images);
// console.log(wr);
// const gameAnswer = gameAnswer.querySelectorAll(`.game__answer > input`);

export {wr};
