const createDomElement = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.insertAdjacentHTML(`afterbegin`, template);
  return wrapper;
};

const centralScreen = document.querySelector(`.central`);

const showScreen = (element) => {
  centralScreen.appendChild(element);
};

const removeGameElement = () => {
  while (centralScreen.firstChild) {
    centralScreen.removeChild(centralScreen.firstChild);
  }
};

const removeGameElementWithoutHeader = () => {
  if (centralScreen.firstElementChild.firstElementChild.className === `header`) {
    while (centralScreen.firstChild.nextSibling) {
      centralScreen.removeChild(centralScreen.firstChild.nextSibling);
    }
  }
};

export {createDomElement, showScreen, removeGameElement, removeGameElementWithoutHeader};
