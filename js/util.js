export const createDomElement = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.insertAdjacentHTML(`afterbegin`, template);
  return wrapper;
};

const centralScreen = document.querySelector(`.central`);

export const showScreen = (element) => {
  while (centralScreen.firstChild) {
    centralScreen.removeChild(centralScreen.firstChild);
  }
  centralScreen.appendChild(element);
};
