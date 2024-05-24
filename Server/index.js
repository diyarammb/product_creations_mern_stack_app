const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mysql = require('mysql');

const app = express();
const port = 3001;
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mern_product'
});

connection.connect();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Endpoint to receive form data
app.post('/addcategory', (req, res) => {
  const { name, descriptions } = req.body;

  const formData = {
    name: name,
    descriptions: descriptions,

  };

  connection.query('INSERT INTO category SET ?', formData, (error, results, fields) => {
    if (error) throw error;
    res.json({ success: true, message: 'category data added successfully' });
  });
});

// Retrive Data from Mysql

app.get('/viewCateData', (req, res) => {
  connection.query('SELECT * FROM category', (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log('Retrieved data:', results);
    res.json(results);
  });
});


// product sections
app.post('/addproduct', (req, res) => {
  const { category, title, descriptions, price } = req.body;

  const formData = {
    category: category,
    title: title,
    descriptions: descriptions,
    price: price,

  };

  connection.query('INSERT INTO product SET ?', formData, (error, results, fields) => {
    if (error) throw error;
    res.json({ success: true, message: 'Product data added successfully' });
  });
});

app.get('/viewproduct', (req, res) => {
  connection.query('SELECT * FROM product', (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log('Retrieved data:', results);
    res.json(results);
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
