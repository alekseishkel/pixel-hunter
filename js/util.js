const centralScreen = document.querySelector(`.central`);

const createDomElement = (template) => {
  // const wrapper = document.createElement(`div`);
  // wrapper.insertAdjacentHTML(`afterbegin`, template);
  // return wrapper;
  const wrapper = document.createElement(`div`);
  const fragment = document.createDocumentFragment();

  wrapper.insertAdjacentHTML(`afterbegin`, template);
  wrapper.childNodes.forEach((element) => {
    fragment.appendChild(element);
  });

  return fragment;
};

const showScreen = (element, headerElement) => {
  // if (centralScreen.firstElementChild) {
  //   element.childNodes.forEach((node) => {
  //     centralScreen.prepend(node);
  //   });

  //   if (headerElement) {
  //     headerElement.childNodes.forEach((node) => {
  //       centralScreen.prepend(node);
  //     });
  //   }

  // } else {
  //   element.childNodes.forEach((node) => {
  //     centralScreen.appendChild(node);
  //   });
  // }
  centralScreen.appendChild(element);

  if (headerElement) {
    centralScreen.appendChild(headerElement);
  }

};

const removeScreen = () => {
  const removableElements = Array.from(centralScreen.children);
  removableElements.forEach((node) => {
    if (node.className !== `header` && node.className !== `footer`) {
      centralScreen.removeChild(node);
    }
  });
};

const removeGameElement = () => {
  while (centralScreen.firstChild) {
    centralScreen.removeChild(centralScreen.firstChild);
  }
};

export {createDomElement, showScreen, removeScreen, removeGameElement};
