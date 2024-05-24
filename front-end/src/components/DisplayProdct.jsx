import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';


const DisplayProdct =()=> {
  const [productData, setProduct] = useState([]);

  useEffect(() => {
     
    axios.get('http://localhost:3001/viewproduct')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);  

  return (
    <div className="App">
        <Home/>
      <div className="row mt-4">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1>Category List</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {productData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.descriptions}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default DisplayProdct;
