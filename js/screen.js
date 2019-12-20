import {level} from './data-structure.js';

const makeAScreenTemplate = (arr, gameElement, numberOfGameScreen) => {
  let screenTemplate;
  const gameContent = gameElement.querySelector(`.game__content`);

  while (gameContent.firstChild) {
    gameContent.removeChild(gameContent.firstChild);
  }

  arr.forEach((elem, index) => {
    if (level[numberOfGameScreen].questions.span) {
      screenTemplate = `
        <img src=${elem} alt="Option ${index + 1}" width=${level[numberOfGameScreen].questions.imagesSizes.width} height=${level[numberOfGameScreen].questions.imagesSizes.height}>
        <label class="game__answer game__answer--photo">
          <input name="question${index + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${index + 1}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>`;
    } else {
      screenTemplate = `
        <img src=${elem} alt="Option ${index + 1}" width=${level[numberOfGameScreen].questions.imagesSizes.width} height=${level[numberOfGameScreen].questions.imagesSizes.height}>
        <label class="game__answer game__answer--photo">
          <input name="question${index + 1}" type="radio" value="photo">
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${index + 1}" type="radio" value="paint">
        </label>`;
    }
    const wrapper = document.createElement(`div`);
    wrapper.className = `game__option`;
    wrapper.insertAdjacentHTML(`afterbegin`, screenTemplate);
    gameContent.insertAdjacentElement(`beforeend`, wrapper);
  });
};

export {makeAScreenTemplate};
