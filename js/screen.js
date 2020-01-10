import {level} from './data-structure.js';

const makeAScreenTemplate = (arr, gameElement, numberOfGameScreen, callback) => {
  let screenTemplate;
  const gameContent = gameElement.querySelector(`.game__content`);

  while (gameContent.firstChild) {
    gameContent.removeChild(gameContent.firstChild);
  }

  arr.forEach((elem, index) => {
    const image = new Image();
    image.src = elem;

    // сделать массив из изображений, а потом пройти по массиву и вставить шаблон

    console.log(index);
    image.onload = () => {
      console.log(index);
      console.log(elem);

      const realWidth = image.naturalWidth;
      const realHeight = image.naturalHeight;
      let imageWidth;

      if (realWidth > realHeight) {
        imageWidth = level[numberOfGameScreen].questions.imagesSizes.width;
      } else {
        imageWidth = level[numberOfGameScreen].questions.imagesSizes.height * realWidth / realHeight;
      }

      if (level[numberOfGameScreen].questions.span) {
        screenTemplate = `
              <img src=${elem} alt="Option ${index + 1}" width=${imageWidth}>
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
              <img src=${elem} alt="Option ${index + 1}" width=${imageWidth}>
              <label class="game__answer game__answer--photo">
                <input name="question${index + 1}" type="radio" value="photo">
              </label>
              <label class="game__answer game__answer--paint">
                <input name="question${index + 1}" type="radio" value="paint">
              </label>`;
      }

      console.log(index);
      const wrapper = document.createElement(`div`);
      wrapper.className = `game__option`;
      wrapper.insertAdjacentHTML(`afterbegin`, screenTemplate);
      gameContent.insertAdjacentElement(`beforeend`, wrapper);

      if (index === arr.length - 1) {
        console.log(arr.length);
        callback();
      }
    };
  });
};

export {makeAScreenTemplate};
