const centralScreen = document.querySelector(`.central`);

const showScreen = (mainElement, headerElement, footerElement) => {
  if (!centralScreen.firstElementChild) {
    centralScreen.insertAdjacentElement(`afterbegin`, mainElement);
  } else {
    centralScreen.lastElementChild.before(mainElement);
  }

  if (headerElement) {
    centralScreen.insertAdjacentElement(`afterbegin`, headerElement);
  }

  if (footerElement) {
    centralScreen.insertAdjacentElement(`beforeend`, footerElement);
  }
};

const removeScreen = () => {
  const removableElements = Array.from(centralScreen.children);
  removableElements.forEach((node) => {
    if (node.firstElementChild.className !== `header` && node.firstElementChild.className !== `footer`) {
      centralScreen.removeChild(node);
    }
  });
};

const removeScreenWithoutFooter = () => {
  const removableElements = Array.from(centralScreen.children);
  removableElements.forEach((node) => {
    if (node.firstElementChild.className !== `footer`) {
      centralScreen.removeChild(node);
    }
  });
};

const findAnswersIcons = () => {
  const answersIcons = document.querySelectorAll(`ul.stats > .stats__result`);
  return answersIcons;
};

const changeAnswersIcons = (icons) => {
  const statsInGameScreen = document.querySelectorAll(`ul.stats > .stats__result`);
  statsInGameScreen.forEach((elem, index) => {
    elem.className = icons[index].className;
  });

  icons.forEach((elem) => {
    elem.className = `stats__result stats__result--unknown`;
  });
};

const clearRadioButtons = () => {
  const radioButtons = document.querySelectorAll(`.game__answer > input`);
  if (radioButtons) {
    radioButtons.forEach((elem) => {
      elem.checked = false;
    });
  }
};

export {
  showScreen,
  removeScreen,
  removeScreenWithoutFooter,
  findAnswersIcons,
  changeAnswersIcons,
  clearRadioButtons
};
