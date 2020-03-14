import {showScreen, removeScreen} from './../util.js';
import IntroView from './intro-view.js';
import greetengView from './../greeting/greeting-view.js';

// export default class Main extends IntroView {
//   constructor() {
//     super();
//   }

//   onClick() {
//     console.log(`2`);
//     removeScreen();
//     showScreen(greetengView);
//   }
// }
const intro = new IntroView();

intro.onClick = () => {
  removeScreen();
  showScreen(greetengView);
};

console.log(intro.onClick);

