const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', {
    title: "Home",
    desc: "Welcome to J0Z3F weather app"
  })
})

const path = require("path");
const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

///////////////////////////////////////////////////////////////////////

app.set('view engine', 'hbs');

const viewsDir = path.join(__dirname, "../layout/views")
app.set("views", viewsDir)

///////////////////////////////////////////////////////////////////////

var hbs = require('hbs')

const partDir = path.join(__dirname, "../layout/partials")
hbs.registerPartials(partDir)

///////////////////////////////////////////////////////////////////////


app.get('/services', (req, res) => {
  res.render('services', {
    title: "Services",
    desc: "This is services page",
    img: "https://placebear.com/200/300"
  })
})

/////////////////////////////////////////////////////////////////////////

const geocode = require('./geocode');
const forecast = require('./forecast');

app.get('/weather', (req, res) => {
  const country = req.query.country;

  if (!country) {
    return res.send({
      error: 'You must enter a country.'
    });
  }

  geocode(country, (error, geocodeData) => {
    if (error) {
      return res.send({ error });
    }

    const { lati, long } = geocodeData;

    forecast(lati, long, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecastData,
        country: req.query.country,
        lati: lati,
        long: long
      });
    });
  });
});


/////////////////////////////////////////////////////////////////////////

app.get('*', (req, res) => {
  res.send('ERROR: 404 Page Not found')
})

/////////////////////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

