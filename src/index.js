// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

require("babel-core/register");
require("babel-polyfill");

async function getResponse() {
    const getAPI = await fetch('https://api.openweathermap.org/data/2.5/weather?q=alexandria&appid=45997ba80da98040a7b69f317ccc26ab')
    const response = await getAPI.json()
    console.log(response)
}

getResponse()