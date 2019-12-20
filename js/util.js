export const createDomElement = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.insertAdjacentHTML(`afterbegin`, template);
  return wrapper;
};

const centralScreen = document.querySelector(`.central`);

export let showScreen = (element) => {
  while (centralScreen.firstChild) {
    centralScreen.removeChild(centralScreen.firstChild);
  }
  const a = centralScreen.appendChild(element);
  return a;
};
