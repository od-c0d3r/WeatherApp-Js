require('babel-core/register');
require('babel-polyfill');

const API = '45997ba80da98040a7b69f317ccc26ab';

export default class Server {
  static async getResponse(location) {
    const getAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API}`);
    const response = await getAPI.json();
    return response;
  }
}
