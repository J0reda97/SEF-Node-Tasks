const geocode = require("./geocode");
const forecast = require("./forecast");

const country = process.argv[2];

geocode(country, (error, data) => {
  error
    ? console.log("ERROR: ", error)
    : console.log(`Latitude: ${data.lati} , Longtude: ${data.long}`);
  if (data) {
    forecast(data.lati, data.long, (error, data) => {
      error ? console.log("ERROR: ", error) : console.log(data);
    });
  }
});
