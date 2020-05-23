const SERVER_URL = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter`;

const APP_ID = 4959603320;

const checkResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status} ${response.statusText}`);
  }
};

const toJSON = (res) => res.json();

export default class Loader {
  static loadResults(name) {
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`).then(checkResponse).then(toJSON);
  }

  static sendResults(data, name) {
    data = Object.assign({name}, data);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`, requestSettings);
  }
}
