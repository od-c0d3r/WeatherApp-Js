import Server from './server';
import View from './views';

export default class Controller {
  static saveToLocal(response) {
    return localStorage.setItem('response', JSON.stringify(response));
  }

  static getFromLocal() {
    const obj = JSON.parse(localStorage.response);
    return obj;
  }

  static reset() {
    const results = document.getElementById('results');
    results.innerHTML = '';
    document.body.style.backgroundColor = 'ghostwhite';
    return localStorage.clear();
  }

  static start() {
    document.addEventListener('click', (e) => {
      if (e.target.id === 'locationInput') {
        Controller.reset();
      }
      if (e.target.id === 'searchBtn') {
        e.preventDefault();
        const locationInput = document.getElementById('locationInput');
        const fahrenheit = document.getElementById('flexRadioDefault1');

        Server.getResponse(locationInput.value)
          .then((response) => {
            if (response.cod !== 200) {
              View.errorMessage(response);
            } else {
              Controller.saveToLocal(response);
              View.result(response, fahrenheit.checked);
            }
          });
      }
      if (e.target.id === 'flexRadioDefault1') {
        const response = Controller.getFromLocal();
        View.result(response, true);
      }
      if (e.target.id === 'flexRadioDefault2') {
        const response = Controller.getFromLocal();
        View.result(response, false);
      }
    });
  }
}