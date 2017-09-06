'use strict';

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 5000;

const express = require('express');
const app = express();
app.use(express.static('./public'));

app.listen(5000, () => {
  console.log('server up');
});
