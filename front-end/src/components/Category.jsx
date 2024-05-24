
import React, { useState } from 'react';
import axios from 'axios';
import Home from './Home';
import { Link } from 'react-router-dom';

function Category() {
  const [cateData, setCateData] = useState({name: "", descriptions: "",});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCateData({ ...cateData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    e.preventDefault();
    axios.post('http://localhost:3001/addcategory', cateData)
      .then(response => {
        console.log(response.data);
        setError("category data added successfully");
      })
      .catch(error => {
        console.error('Error', error);
        setError('Failed to add category');

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
              <label for="categoryName" class="form-label">Category Name</label>
              <input type="text" className="form-control" id="categoryName" placeholder="Enter category name" name="name" value={cateData.name} onChange={handleChange} />
            </div>
            <div class="mb-3">
              <label for="categoryDescription" className="form-label">Category Description</label>
              <textarea class="form-control" id="categoryDescription" rows="3" placeholder="Enter category description" name="descriptions" value={cateData.descriptions} onChange={handleChange}></textarea>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
          <Link to="/viewcate" className="btn btn-success m-1">View</Link>
        </div>
        <div className="col-md-4"></div>
      </div>

    </div >
  );
}
export default Category;
