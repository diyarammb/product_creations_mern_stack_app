import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';

function ViewCate() {
  const [cateData, setCateData] = useState([]);

  useEffect(() => {
     
    axios.get('http://localhost:3001/viewCateData')
      .then(response => {
        setCateData(response.data);
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
                <th scope="col">Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {cateData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.descriptions}</td>
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

export default ViewCate;
