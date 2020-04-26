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

const removeFullScreen = () => {
  while (centralScreen.firstChild) {
    centralScreen.removeChild(centralScreen.firstChild);
  }
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
};

const copyAnswersIcons = () => {
  const statsInGameScreen = document.querySelector(`ul.stats`).cloneNode(true);
  return statsInGameScreen;
};

const pasteAnswersIcons = (icons) => {
  const statsInStatsScreen = document.querySelector(`.result__table > tbody > tr > td`);
  statsInStatsScreen.appendChild(icons);
};

const clearRadioButtons = () => {
  const statsInGameScreen = document.querySelectorAll(`.game__answer > input`);
  statsInGameScreen.forEach((elm) => {
    elm.checked = false;
  });
};

export {
  showScreen,
  removeScreen,
  removeFullScreen,
  findAnswersIcons,
  changeAnswersIcons,
  copyAnswersIcons,
  pasteAnswersIcons,
  clearRadioButtons
};
