const request = require("request");

const forecast = (lati, long, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=e38569da9ef547e3972181840231911&q=" +
    lati +
    "," +
    long +
    "&aqi=no";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Error has occured", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        response.body.location.name +
          " is " +
          response.body.current.condition.text +
          " and temp is " +
          response.body.current.temp_c
      );
    }
  });
};

module.exports = forecast;
