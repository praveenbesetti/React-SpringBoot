import axios from "axios";
import React, {  useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

 const Details=()=> {
 

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    
    pick_date: "",
    return_date:" ",
  });

  const { name, mobile, email, car ,pick_date ,return_date } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const sender = async () => {
    try {
      const result = await axios.post("http://localhost:8080/drive-in-cars", user);
      console.log(result.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  
  
  const onSubmit = async (e) => { 
     sender();
    e.preventDefault();

   
  
 setUser({  name: "",
   mobile: "",
   email: "",
  
   pick_date:"",
   return_date:""
 });
   
 
  };
  
 

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                number
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter your username"
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
             
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                pick_up_date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="pick_date"
                value={pick_date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                return_date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="return_date"
                value={return_date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button> 
          <Link to="details">  <button style={{float:'right'}}className="btn btn-outline-primary">View</button></Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}
export default Details;