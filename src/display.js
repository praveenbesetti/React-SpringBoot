import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import axios from 'axios';
import {Link} from 'react-router-dom';
 const OrderForm = () => {
  const [orders, setOrders] = useState([]);

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint
        const response = await axios.get("http://localhost:8080/drive-in-cars");
        const data = response.data; // Use response.data instead of response.json()
        setOrders(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData(); // Call the async function
  }, []);
  

  const handleReturnButtonClick = async (order) => {
    console.log('Returning order:', order);
    try {
      const result = await axios.delete("http://localhost:8080/drive-in-cars",{data:order});
      console.log(result.data);
      // Handle success or do something with the result
    } catch (error) {
      console.error("Error deleting item:", error);
      // Handle errors
    }
  };
  

  return (
    <div className="container mt-4">
      <h1>Order Form</h1>
    <Link to="/"><button className="btn btn-primary mb-3" onClick={() => console.log('Back button clicked')}>
        Back
      </button></Link>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Pickup Date</th>
            <th scope="col">Return Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order,index) => (
            <tr key={index}>
              <td>{order.mobile}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.pick_date}</td>
              <td>{order.return_date}</td>
              <td>
              <button className="btn btn-primary" onClick={(e) => handleReturnButtonClick(order.mobile)}>
    Delete
  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderForm;
