const initialState = {
  lives: 3,
  time: 0
};

const level = [
  {
    description: `Угадайте для каждого изображения фото или рисунок?`,
    questions: {
      images: new Set([`https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`]),
      imagesSizes: {
        width: `468`,
        height: `458`
      },
      span: true
    },
    answers: new Map([[`https://k42.kn3.net/CF42609C8.jpg`, `url("http://127.0.0.1:5500/img/photo_big.png")`], [`https://k42.kn3.net/D2F0370D6.jpg`, `url("http://127.0.0.1:5500/img/photo_big.png")`]]),
    className: `game__content`
  },
  {
    description: `Угадай, фото или рисунок?`,
    questions: {
      images: new Set([`https://k32.kn3.net/5C7060EC5.jpg`]),
      imagesSizes: {
        width: `610`,
        height: `455`
      },
      span: true
    },
    answers: new Map([[`https://k32.kn3.net/5C7060EC5.jpg`, `url("http://127.0.0.1:5500/img/paint_big.png")`]]),
    className: `game__content game__content--wide`
  },
  {
    description: `Найдите рисунок среди изображений`,
    questions: {
      images: new Set([`https://placekitten.com/400/400`, `https://placekitten.com/600/500`, `https://placekitten.com/305/455`]),
      imagesSizes: {
        width: `304`,
        height: `455`
      },
      span: false
    },
    answers: new Map([[`https://placekitten.com/600/500`, true]]),
    className: `game__content game__content--triple`
  }
];

let answersMap = new Map();
let currentLevel = {
  level: ``
};

export {initialState, level, answersMap, currentLevel};
