import {level} from './data-structure.js';

const makeAScreenTemplate = (arr, numberOfGameScreen, activateNextScreen) => {
  let screenTemplate;
  const gameTask = document.querySelector(`.game__task`);
  const gameContent = document.querySelector(`.game__content`);

  gameTask.textContent = `${level[numberOfGameScreen].description}`;
  gameContent.className = `${level[numberOfGameScreen].className}`;

  while (gameContent.firstChild) {
    gameContent.removeChild(gameContent.firstChild);
  }

  arr.forEach((elem, index) => {
    const image = new Image();
    image.src = elem;

    if (level[numberOfGameScreen].questions.span) {
      screenTemplate = `
      <img src=${elem} alt="Option ${index + 1}" width=${level[numberOfGameScreen].questions.imagesSizes.width}>
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
      <img src=${elem} alt="Option ${index + 1}" width=${level[numberOfGameScreen].questions.imagesSizes.width}>
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

  const gameOptions = document.querySelectorAll(`.game__option > img`);

  gameOptions.forEach((element) => {
    element.onload = () => {
      const realWidth = element.naturalWidth;
      const realHeight = element.naturalHeight;
      let imageWidth;

      if (realWidth >= realHeight) {
        imageWidth = level[numberOfGameScreen].questions.imagesSizes.width;
      } else {
        imageWidth = level[numberOfGameScreen].questions.imagesSizes.height * realWidth / realHeight;
      }

      element.width = imageWidth;
    };
  });

  activateNextScreen();
};

export default makeAScreenTemplate;
