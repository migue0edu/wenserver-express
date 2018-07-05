const http = require('http');
const port = 9080;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  let salida = {
    nombre: 'fernando',
    edad: 32,
    url: req.url
  }
  res.write(JSON.stringify(salida));
  res.end();
})
.listen(port);
console.log(`Escuchando en ${port}.`);
