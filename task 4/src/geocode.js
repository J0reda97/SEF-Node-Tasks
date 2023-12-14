const request = require("request");

const geocode = (country, callback) => {
  const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=pk.eyJ1IjoiajByZWRhOTciLCJhIjoiY2xwOGt0YWdwMmEwYTJrcWthd3JqbnJpayJ9.DJEuLOXZXoNa9suZrv6MuA`;

  request({ url: geocodeUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to geocode service", undefined);
    } else if (response.body.message) {
      callback(response.body.message, undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find this location", undefined);
    } else {
      callback(undefined, {
        lati: response.body.features[0].center[0],
        long: response.body.features[0].center[1],
      });
    }
  });
};

module.exports = geocode;
