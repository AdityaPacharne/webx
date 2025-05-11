const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./products.json');

app.use(cors());
app.use(express.static('.'));

app.get('/search', (req, res) => {
  const q = req.query.q?.toLowerCase();
  const result = products.filter(p => p.name.toLowerCase().includes(q));
  res.json(result);
});

app.listen(3000, () => console.log('http://localhost:3000'));
