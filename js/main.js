(function () {

  const greeting = document.getElementById(`greeting`).content.querySelector(`.greeting.central--blur`);
  if (greeting) {
    console.log(greeting);
  }

  const rules = document.getElementById(`rules`);
  const rulesHeader = rules.content.querySelector(`.header`);
  const rulesMain = rules.content.querySelector(`.rules`);
  const rulesFooter = rules.content.querySelector(`.footer`);

  const game1 = document.getElementById(`game-1`).content;
})();
