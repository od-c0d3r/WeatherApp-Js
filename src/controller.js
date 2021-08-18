import Server from './server';
import View from './views';

export default class Controller {
  static start() {
    document.addEventListener('click', (e) => {
      if (e.target.id === 'locationInput') {
        const results = document.getElementById('results');
        results.innerHTML = '';
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
              View.resualt(response, fahrenheit.checked);
            }
          });
      }
    });
  }
}