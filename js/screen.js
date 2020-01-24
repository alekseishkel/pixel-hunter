import {level} from './data-structure.js';

const makeAScreenTemplate = (arr, gameElement, numberOfGameScreen, callback) => {
  let screenTemplate;
  const gameContent = gameElement.querySelector(`.game__content`);

  while (gameContent.firstChild) {
    gameContent.removeChild(gameContent.firstChild);
  }

  // arr.forEach((elem, index) => {


  //   if (level[numberOfGameScreen].questions.span) {
  //     screenTemplate = `
  //                                 <img src=${elem} alt="Option ${index + 1}" width=${458}>
  //                                 <label class="game__answer game__answer--photo">
  //                                   <input name="question${index + 1}" type="radio" value="photo">
  //                                   <span>Фото</span>
  //                                 </label>
  //                                 <label class="game__answer game__answer--paint">
  //                                   <input name="question${index + 1}" type="radio" value="paint">
  //                                   <span>Рисунок</span>
  //                                 </label>`;
  //   } else {
  //     screenTemplate = `
  //                                 <img src=${elem} alt="Option ${index + 1}" width=${458}>
  //                                 <label class="game__answer game__answer--photo">
  //                                   <input name="question${index + 1}" type="radio" value="photo">
  //                                 </label>
  //                                 <label class="game__answer game__answer--paint">
  //                                   <input name="question${index + 1}" type="radio" value="paint">
  //                                 </label>`;
  //   }
  //   const wrapper = document.createElement(`div`);
  //   wrapper.className = `game__option`;
  //   wrapper.insertAdjacentHTML(`afterbegin`, screenTemplate);
  //   gameContent.insertAdjacentElement(`beforeend`, wrapper);
  //   imagesArray.push(image);


  //   const image = new Image();
  //   image.src = elem;
  //   imageElement.onload = () => {

  //     const realWidth = image.naturalWidth;
  //     const realHeight = image.naturalHeight;
  //     let imageWidth;
  //     if (realWidth > realHeight) {
  //       imageWidth = level[numberOfGameScreen].questions.imagesSizes.width;
  //     } else {
  //       imageWidth = level[numberOfGameScreen].questions.imagesSizes.height * realWidth / realHeight;
  //     }

  //     const gameOptions = gameElement.querySelectorAll(`.game__option > img`);
  //     const gameOptionsArray = Array.from(gameOptions);
  //     gameOptionsArray((elem, index) => {
  //       elem.width = imageWidth;
  //     });
  //   };
  // });

  let imagesArray = [];

  arr.forEach((elem, index) => {
    const image = new Image();
    image.src = elem;

    imagesArray.push(image);

  });

  let fragment = document.createDocumentFragment();

  imagesArray.forEach((imageElement, imageElementIndex) => {
    // let imageIndex = 0;

    imageElement.onload = () => {
      const realWidth = imageElement.naturalWidth;
      const realHeight = imageElement.naturalHeight;
      let imageWidth;
      if (realWidth > realHeight) {
        imageWidth = level[numberOfGameScreen].questions.imagesSizes.width;
      } else {
        imageWidth = level[numberOfGameScreen].questions.imagesSizes.height * realWidth / realHeight;
      }

      if (level[numberOfGameScreen].questions.span) {
        screenTemplate = `
                                    <img src=${imageElement.src} alt="Option ${imageElementIndex + 1}" width=${imageWidth}>
                                    <label class="game__answer game__answer--photo">
                                      <input name="question${imageElementIndex + 1}" type="radio" value="photo">
                                      <span>Фото</span>
                                    </label>
                                    <label class="game__answer game__answer--paint">
                                      <input name="question${imageElementIndex + 1}" type="radio" value="paint">
                                      <span>Рисунок</span>
                                    </label>`;
      } else {
        screenTemplate = `
                                    <img src=${imageElement.src} alt="Option ${imageElementIndex + 1}" width=${imageWidth}>
                                    <label class="game__answer game__answer--photo">
                                      <input name="question${imageElementIndex + 1}" type="radio" value="photo">
                                    </label>
                                    <label class="game__answer game__answer--paint">
                                      <input name="question${imageElementIndex + 1}" type="radio" value="paint">
                                    </label>`;
      }

      // const wrapper = document.createElement(`div`);
      // wrapper.className = `game__option`;
      // wrapper.insertAdjacentHTML(`afterbegin`, screenTemplate);
      // if (imageIndex <= imageElementIndex) {
      //   gameContent.insertAdjacentElement(`beforeend`, wrapper);
      // } else {
      //   gameContent.insertAdjacentElement(`afterbegin`, wrapper);
      // }


      const wrapper = document.createElement(`div`);
      wrapper.className = `game__option`;
      wrapper.insertAdjacentHTML(`afterbegin`, screenTemplate);
      gameContent.insertAdjacentElement(`beforeend`, wrapper);
      const gameOptions = gameElement.querySelectorAll(`.game__option > img`);
      const gameOptionsArray = Array.from(gameOptions);
      console.log(gameOptionsArray.sort(
          (function (a, b) { // сортируем
            if (a.alt > b.alt) {
              return 1;
            }
            if (a.alt < b.alt) {
              return -1;
            }
            return 0;
          })
      ));
      console.log(gameOptions);

      if (imageElementIndex === arr.length - 1) {
        callback();
      }
    };

  });


  // const clbimg = (elem) => {
  //   const image = new Image();

  //   image.src = elem;
  //   const realWidth = image.naturalWidth;
  //   const realHeight = image.naturalHeight;
  //   let imageWidth;
  //   if (realWidth > realHeight) {
  //     imageWidth = level[numberOfGameScreen].questions.imagesSizes.width;
  //   } else {
  //     imageWidth = level[numberOfGameScreen].questions.imagesSizes.height * realWidth / realHeight;
  //   }
  //   console.log(imageWidth);
  //   return imageWidth;

  // };


  // const getImageSizes = () => {
  //   let imagesArray = [];
  //   const createImage = (elem) => {
  //     window.image = new Image();

  //     window.image.src = elem;
  //     // console.log(image);
  //     imagesArray.push(window.image);
  //     return window.image;
  //   };
  //   let imag;
  //   console.log(arr);
  //   arr.forEach((elem, index) => {
  //     imag = createImage(elem);
  //   });

  //   // const fdasfdas = (elem) => {
  //   //   const image = new Image();

  //   //   image.src = elem;
  //   //   const getWidth = () => {
  //   //     const realWidth = image.naturalWidth;
  //   //     const realHeight = image.naturalHeight;
  //   //     let imageWidth;
  //   //     if (realWidth > realHeight) {
  //   //       imageWidth = level[numberOfGameScreen].questions.imagesSizes.width;
  //   //     } else {
  //   //       imageWidth = level[numberOfGameScreen].questions.imagesSizes.height * realWidth / realHeight;
  //   //     }
  //   //     console.log(imageWidth);
  //   //     return imageWidth;
  //   //   };

  //   //   const get = () => {
  //   //     image.addEventListener(`load`, () => {
  //   //       console.log(getWidth());
  //   //     });
  //   //   };

  //     // document.querySelector(`.game__option > img.src=`);
  //   // };
  //   // fdasfdas(arr[0]);

  //   // const fdsafdsafs =
  //   //
  //       // clbimg(image);


  //   imagesArray.forEach((imageElement, imageElementIndex) => {
  //     window.image.addEventListener(`load`, () => {
  //       const img = arr.find((item) => item === imageElement.src);
  //       if (typeof img === `string`) {
  //         if (level[numberOfGameScreen].questions.span) {
  //           screenTemplate = `
  //                             <img src=${imageElement.src} alt="Option ${imageElementIndex + 1}" width=${clbimg(imageElement.src)}>
  //                             <label class="game__answer game__answer--photo">
  //                               <input name="question${imageElementIndex + 1}" type="radio" value="photo">
  //                               <span>Фото</span>
  //                             </label>
  //                             <label class="game__answer game__answer--paint">
  //                               <input name="question${imageElementIndex + 1}" type="radio" value="paint">
  //                               <span>Рисунок</span>
  //                             </label>`;
  //         } else {
  //           screenTemplate = `
  //                             <img src=${imageElement.src} alt="Option ${imageElementIndex + 1}" width=${clbimg(imageElement.src)}>
  //                             <label class="game__answer game__answer--photo">
  //                               <input name="question${imageElementIndex + 1}" type="radio" value="photo">
  //                             </label>
  //                             <label class="game__answer game__answer--paint">
  //                               <input name="question${imageElementIndex + 1}" type="radio" value="paint">
  //                             </label>`;
  //         }

  //         const wrapper = document.createElement(`div`);
  //         wrapper.className = `game__option`;
  //         wrapper.insertAdjacentHTML(`afterbegin`, screenTemplate);
  //         gameContent.insertAdjacentElement(`beforeend`, wrapper);
  //         if (imageElementIndex === arr.length - 1) {
  //           callback();
  //         }
  //       }
  //     });
  //     console.log(imagesArray);


  //   });
  // };
  // getImageSizes();

  // const putScreenTemplate = (callbac) => {
  //   callbac();
  //   window.image.addEventListener(`load`, () => {
  //     console.log(imageWidth);
  //   });
  //   imagesArray.forEach((imageElement, imageElementIndex) => {

  //     const img = arr.find((item) => item === imageElement.src);
  //     if (typeof img === `string`) {
  //       console.log(img);

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
  //   }
  // });
  // };
  // putScreenTemplate(getImageSizes);

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
