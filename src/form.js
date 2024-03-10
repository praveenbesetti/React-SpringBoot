import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Details = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    car: "",
    pick_date: "",
    return_date: "",
  });

  const { name, mobile, email, car, pick_date, return_date } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

     
    console.log(user);
    // You can perform further actions (e.g., API calls) here
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            {/* Other form fields */}
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Mobile
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your mobile number"
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            {/* Corrected name attributes for car, pick_date, and return_date */}
            <div className="mb-3">
              <label htmlFor="Car" className="form-label">
                Car
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your car"
                name="car"
                value={car}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {/* Similar corrections for pick_date and return_date */}
            {/* ... */}

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
