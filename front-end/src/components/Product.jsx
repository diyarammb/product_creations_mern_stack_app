import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Home from './Home';

function Product() {

  const [cateData, setCateData] = useState([]);
  const [error, setError] = useState(null);

  const [addProduct, setProduct] = useState({
    category: "",
    title: "",
    descriptions: "",
    price: ""

  });

  useEffect(() => {
    axios.get('http://localhost:3001/viewCateData')
      .then(response => {
        setCateData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...addProduct, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    e.preventDefault();
    axios.post('http://localhost:3001/addproduct', addProduct)
      .then(response => {
        console.log(response.data);
        setError("product data added successfully");
      })
      .catch(error => {
        console.error('Error', error);
        setError('Failed to add Product');

      });
  }

  return (
    <div class="App">
      <Home />
      <div className="row mt-4">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="categoryName" class="form-label">Category</label>

              <select className="form-control" name="category" value={addProduct.category} onChange={handleChange} >
                {cateData.map(item => (
                  <option key={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div class="mb-3">
              <label for="categoryDescription" className="form-label">Title </label>
              <input type='text' class="form-control" placeholder="Enter Product title" name="title" value={addProduct.title} onChange={handleChange} />
            </div>

            <div class="mb-3">
              <label for="categoryDescription" className="form-label">Category Description</label>
              <textarea class="form-control" id="categoryDescription" rows="3" placeholder="Enter description" name="descriptions" value={addProduct.description} onChange={handleChange}></textarea>
            </div>
            <div class="mb-3">
              <label for="categoryDescription" className="form-label">Price </label>
              <input type='text' class="form-control" placeholder="$" name="price" value={addProduct.price} onChange={handleChange} />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
          <Link to="/productview" className="btn btn-success m-1">View Prodct</Link>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>

  );
}

export default Product;
