const request = require('request');
const place_codes = ['2357024', '2459115', '2514815', '2450022'];
const places = ['Atlanta', 'New York', 'Washington DC', 'Miami'];
module.exports = (channel) => {
  const random = (Math.floor(Math.random() * Math.floor(4)));
  request(`https://www.metaweather.com/api/location/${place_codes[random]}/`, function (error, response, body) {
    if (error) {
      console.log(error);
      channel.send("Er. Something went wrong... bye!");
      return;
    }

    let forecast = JSON.parse(body);
    let wsn = forecast.consolidated_weather[0].weather_state_name;
    let wsa = forecast.consolidated_weather[0].weather_state_abbr;
    let weather_text = (wsn[wsn.length - 1] === 's') ? wsn : wsn + 's';
    channel.send(`${places[random]} is in for ${weather_text}`,
                 { files: [`https://www.metaweather.com/static/img/weather/png/64/${wsa}.png`]});
  });
}