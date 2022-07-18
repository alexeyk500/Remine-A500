const express = require('express');

const proxy = require('express-http-proxy');
const path = require('path');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/proxy', proxy('https://opt2.rbtechnologies.ru:9909'));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/hello', function (req, res) {
  return res.send('<h2>Hello</h2>');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`, __dirname);
});
