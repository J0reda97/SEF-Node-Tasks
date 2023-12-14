const request = require("request");

const forecast = (lati, long, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=50b46face6b94668969190350230212&q=" +
    lati +
    "," +
    long +
    "&aqi=no";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Error has occurred", undefined, lati, long);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined, lati, long);
    } else {
      const weatherInfo =
        response.body.location.name +
        " is " +
        response.body.current.condition.text +
        " and temp is " +
        response.body.current.temp_c;

      callback(undefined, weatherInfo, lati, long);
    }
  });
};

module.exports = forecast;
