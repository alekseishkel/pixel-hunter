import {level} from './data-structure.js';

const changeImageSizes = (numberOfGameScreen) => {
  const gameOptions = document.querySelectorAll(`.game__option > img`);
  gameOptions.forEach((image) => {
    image.onload = () => {
      const realWidth = image.naturalWidth;
      const realHeight = image.naturalHeight;
      let imageWidth;

      if (realWidth >= realHeight) {
        imageWidth = level[numberOfGameScreen - 1].questions.imagesSizes.width;
      } else {
        imageWidth = level[numberOfGameScreen - 1].questions.imagesSizes.height * realWidth / realHeight;
      }

      image.width = imageWidth;
    };
  });
};

export default changeImageSizes;
