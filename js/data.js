export const initialState = {
  lives: 3,
  time: 0
};

export const level = [
  {
    description: `Угадайте для каждого изображения фото или рисунок?`,
    questions: {
      images: new Set([`https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`]),
      imagesSizes: {
        width: `468`,
        height: `458`
      }
    },
    answers: new Map([[`https://k42.kn3.net/CF42609C8.jpg`, `url(../img/photo_big.png)`], [`https://k42.kn3.net/D2F0370D6.jpg`, `url(../img/photo_big.png)`]]),
  },
  {
    description: `Угадай, фото или рисунок?`,
    questions: {
      images: new Set([`https://k32.kn3.net/5C7060EC5.jpg`]),
      imagesSizes: {
        width: `705`,
        height: `455`
      }
    }
  }
];
