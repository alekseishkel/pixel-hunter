(function () {

  const greeting = document.getElementById(`greeting`).content;
  const rules = document.getElementById(`rules`).content;
  const game1 = document.getElementById(`game-1`).content;
  const game2 = document.getElementById(`game-2`).content;
  const game3 = document.getElementById(`game-3`).content;
  const stats = document.getElementById(`stats`).content;

  const screens = [greeting, rules, game1, game2, game3, stats];

  const RIGHT_ARROW_KEYCODE = 39;
  const LEFT_ARROW_KEYCODE = 37;

  const centralScreen = document.querySelector(`.central`);

  const showScreen = (screenNumber) => {
    while (centralScreen.firstChild) {
      centralScreen.removeChild(centralScreen.firstChild);
    }
    centralScreen.appendChild(screens[screenNumber].cloneNode(true));
  };

  let currentScreen = 3;
  showScreen(currentScreen);

  document.body.insertAdjacentHTML(`beforeend`, `<div class="arrows__wrap">
  <style>
  .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
  </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>
  </div>`);

  const arrows = document.querySelector(`.arrows__btn`);
  console.log(arrows);
  arrows.addEventListener(`DOMContentLoaded`, function (evt) {
    // if (evt.keyCode === RIGHT_ARROW_KEYCODE) {
    console.log(`hahaha`);
    evt.preventDefault();
    if (currentScreen < screens.length - 1) {
      ++currentScreen;
      showScreen(currentScreen);
    }
    // }
  });

  document.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === RIGHT_ARROW_KEYCODE) {
      evt.preventDefault();
      if (currentScreen < screens.length - 1) {
        ++currentScreen;
        showScreen(currentScreen);
      }
    }
  });

  document.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === LEFT_ARROW_KEYCODE) {
      evt.preventDefault();
      if (currentScreen > 0) {
        --currentScreen;
        showScreen(currentScreen);
      }
    }
  });


})();
