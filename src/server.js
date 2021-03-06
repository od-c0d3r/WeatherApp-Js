require('babel-core/register');
require('babel-polyfill');

const API = 'PUT_API_KEY';

export default class Server {
  static async getResponse(location) {
    const getAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API}`);
    const response = await getAPI.json();
    return response;
  }
}
