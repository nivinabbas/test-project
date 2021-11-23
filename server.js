const path = require('path');
const express = require('express');
const urllib = require('urllib');
const app = express();
let port = 8080;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));
// app.use('/', api);

app.get('/sanity', function (request, response) {
  console.log(`OK`);
});

app.get('/recipes/:ingredient', function (request, response) {
  const ingredient = request.params.ingredient;

  urllib.request(
    `https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,
    function (err, req, res) {
      const ingredientData = req.toString();
      const ingredientDataParsed = JSON.parse(ingredientData);

      response.send(ingredientDataParsed);
    }
  );

  console.log(`OK`);
});
app.listen(port, function (request, response) {
  console.log(`Server UP`);
});
