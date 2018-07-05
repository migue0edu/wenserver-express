const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers')

const port = process.env.PORT || 3000;

app.use(express.static( __dirname+'/public') ); //Contenido publico
//Express HBS Engine
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');
//Helpers


app.get('/', (req, res) => {

  res.render('home', {
    nombre: 'miguel eduardo RODRIGUEZ',
  }); //Si es un objeto la salida es el formato JSON.
});
app.get('/about', (req, res) => {
  res.render('about',);
});


app.listen(port, () => {
  console.log(`Escuchando en ${port}`);
})
