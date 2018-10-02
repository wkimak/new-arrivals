const express = require('express');
const app = express();
const axios = require('axios');
const data = require('../client/src/data.json')
const navigation = require('../client/src/nav.json');
const path = require('path');

app.use(express.static('./client/dist'));

app.get('/api/data/v1/US/navigation', (req, res) => {
  try {
    res.send(navigation);
  } catch(err) {
    console.log(err);
  }
})

app.get('/api/data/v1/US/enhance-category/c/:category/newarrivals', (req, res) => {
  try {
    if (req.params.category === 'new_arrivals') {
      res.send(data['men']);
    } else if(!data[req.params.category]) {
      res.send('No Current Items');
    } else {
      res.send(data[req.params.category]);
    }
    
  } catch(err) {
    console.log(err);
  }
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen('3000', () => {
  console.log('server is listening on port 3000');
})