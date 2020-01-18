import {level} from './data-structure.js';

const makeAScreenTemplate = (arr, gameElement, numberOfGameScreen, callback) => {
  let screenTemplate;
  const gameContent = gameElement.querySelector(`.game__content`);

  while (gameContent.firstChild) {
    gameContent.removeChild(gameContent.firstChild);
  }

  let imagesArray = [];

  const getImageSizes = () => {
    arr.forEach((elem, index) => {
      window.image = new Image();
      window.image.src = elem;
      imagesArray.push(window.image);
      console.log(imagesArray);

      window.image.onload = () => {
        const realWidth = window.image.naturalWidth;
        const realHeight = window.image.naturalHeight;
        let imageWidth;
        if (realWidth > realHeight) {
          imageWidth = level[numberOfGameScreen].questions.imagesSizes.width;
        } else {
          imageWidth = level[numberOfGameScreen].questions.imagesSizes.height * realWidth / realHeight;
        }
        console.log(imageWidth);

      };
    });
  };

  const putScreenTemplate = (callbac) => {
    callbac();
    window.image.addEventListener(`load`, () => {
      console.log(imageWidth);
    });
    imagesArray.forEach((imageElement, imageElementIndex) => {

      const img = arr.find((item) => item === imageElement.src);
      if (typeof img === `string`) {
        console.log(img);

        //     if (level[numberOfGameScreen].questions.span) {
        //       screenTemplate = `
        //                 <img src=${element} alt="Option ${elementIndex + 1}" width=${100}>
        //                 <label class="game__answer game__answer--photo">
        //                   <input name="question${elementIndex + 1}" type="radio" value="photo">
        //                   <span>Фото</span>
        //                 </label>
        //                 <label class="game__answer game__answer--paint">
        //                   <input name="question${elementIndex + 1}" type="radio" value="paint">
        //                   <span>Рисунок</span>
        //                 </label>`;
        //     } else {
        //       screenTemplate = `
        //                 <img src=${element} alt="Option ${elementIndex + 1}" width=${100}>
        //                 <label class="game__answer game__answer--photo">
        //                   <input name="question${elementIndex + 1}" type="radio" value="photo">
        //                 </label>
        //                 <label class="game__answer game__answer--paint">
        //                   <input name="question${elementIndex + 1}" type="radio" value="paint">
        //                 </label>`;
        //     }

        //     const wrapper = document.createElement(`div`);
        //     wrapper.className = `game__option`;
        //     wrapper.insertAdjacentHTML(`afterbegin`, screenTemplate);
        //     gameContent.insertAdjacentElement(`beforeend`, wrapper);
        //     if (elementIndex === arr.length - 1) {
        //       callback();
        //     }
      }
    });
  };
  putScreenTemplate(getImageSizes);

  // let users = [1, 2, 3, 2, 1, 5, 6];
  // let us = [2, 3, 5, 1, 3, 6, 7, 43, 2, 65, 545, 54, 32];
  // let user;

  // us.forEach((element, elementIndex) => {
  //   user = users.find((item) => item === element);
  //   if (typeof user === `number`) {
  //     console.log(user);

  //   }

  // });
};

export {makeAScreenTemplate};
