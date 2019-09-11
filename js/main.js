(function () {

  const greeting = document.getElementById(`greeting`).content;
  const rules = document.getElementById(`rules`).content;
  const game1 = document.getElementById(`game-1`).content;
  const game2 = document.getElementById(`game-2`).content;
  const game3 = document.getElementById(`game-3`).content;
  const stats = document.getElementById(`stats`).content;

  const screens = [greeting, rules, game1, game2, game3, stats];

  const RIGHT_ARROW_KEYCODE = 39;

  const centralScreen = document.querySelector(`.central`);

  const showScreen = (screenNumber) => {
    while (centralScreen.firstChild) {
      centralScreen.removeChild(centralScreen.firstChild);
    }
    centralScreen.appendChild(screens[screenNumber]);

  };

  let currentScreen = 1;
  showScreen(currentScreen);

  document.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === RIGHT_ARROW_KEYCODE) {
      evt.preventDefault();
      if (currentScreen < screens.length - 1) {
        const elem = ++currentScreen;
        showScreen(elem);
      }
    }
  });


})();
