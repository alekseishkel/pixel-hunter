import {createDomElement, showScreen, removeScreen} from '../util.js';
// import {rulesElement} from '../rules/rules-view.js';
// import {level as levelData} from './data-structure.js';
import AbstractView from '../abstract-view.js';

class GreetingView extends AbstractView {
  get template() {
    return `<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
      <p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;
  }

  bind() {
    const arrow = this.element.querySelector(`.greeting__continue > span > img`);

    arrow.addEventListener(`click`, () => {
      removeScreen();
      showScreen(rulesElement);
    });
  }

}

const greetingView = new GreetingView();
export default greetingView.element;

// const template = `
  // <div class="greeting central--blur">
  //   <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
  //   <h1 class="greeting__asterisk">*</h1>
  //   <div class="greeting__challenge">
  //     <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
  //     <p>Правила игры просты.<br>
  //       Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
  //       Задача кажется тривиальной, но не думай, что все так просто.<br>
  //       Фотореализм обманчив и коварен.<br>
  //       Помни, главное — смотреть очень внимательно.</p>
  //   </div>
  //   <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  // </div>
//   <footer class="footer">
//     <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
//     <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
//     <div class="footer__social-links">
//       <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
//       <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
//       <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
//       <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
//     </div>
//   </footer>`;

// const element = createDomElement(template);

// const arrow = element.querySelector(`.greeting__continue > span > img`);

// arrow.addEventListener(`click`, () => {
//   removeScreen();
//   showScreen(rulesElement);
// });
