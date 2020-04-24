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

const showScreen = (mainElement, headerElement, footerElement) => {
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

const removeGameElement = () => {
  while (centralScreen.firstChild) {
    centralScreen.removeChild(centralScreen.firstChild);
  }
};

export {createDomElement, showScreen, removeScreen, removeGameElement};
