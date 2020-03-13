const centralScreen = document.querySelector(`.central`);

const createDomElement = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.insertAdjacentHTML(`afterbegin`, template);
  return wrapper;
};

const showScreen = (element) => {
  centralScreen.appendChild(element);
};

const removeScreen = () => {
  while (centralScreen.firstChild) {
    centralScreen.removeChild(centralScreen.firstChild);
  }
};

const removeGameElement = () => {
  while (centralScreen.firstChild.nextSibling) {
    centralScreen.removeChild(centralScreen.firstChild.nextSibling);
  }
};

export {createDomElement, showScreen, removeScreen, removeGameElement};
