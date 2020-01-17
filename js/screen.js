import {level} from './data-structure.js';

const makeAScreenTemplate = (arr, gameElement, numberOfGameScreen, callback) => {
  let screenTemplate;
  const gameContent = gameElement.querySelector(`.game__content`);

  while (gameContent.firstChild) {
    gameContent.removeChild(gameContent.firstChild);
  }

  let imagesArray = [];

  arr.forEach((elem, index) => {
    const image = new Image();
    image.src = elem;
    const getImageSizes = () => {
      const realWidth = image.naturalWidth;
      const realHeight = image.naturalHeight;
      let imageWidth;

      if (realWidth > realHeight) {
        imageWidth = level[numberOfGameScreen].questions.imagesSizes.width;
      } else {
        imageWidth = level[numberOfGameScreen].questions.imagesSizes.height * realWidth / realHeight;
      }
      console.log(imageWidth);
      imagesArray.push(image);
    };


    const putScreenTemplate = () => {
      image.addEventListener(`load`, () => {
        getImageSizes();
        console.log(imagesArray[0].src);

      });
    };


    if (level[numberOfGameScreen].questions.span) {
      screenTemplate = `
            <img src=${elem} alt="Option ${index + 1}" width=${putScreenTemplate()}>
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
            <img src=${elem} alt="Option ${index + 1}" width=${putScreenTemplate()}>
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

    if (index === arr.length - 1) {
      callback();
    }
  });
  // let users = [1, 2, 3, 2, 1, 5, 6];
  // let us = [2, 3, 5, 1, 3, 6, 7, 43, 2, 65, 545, 54, 32];
  // let user;

  // us.forEach((element, elementIndex) => {
  //   user = users.find((item) => item === element);
  //   if (user.typeOf(`number`)) {
  //     console.log(user);

  //   }

  // });
};

export {makeAScreenTemplate};
