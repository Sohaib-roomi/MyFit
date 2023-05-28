import React from "react";

const Exercise = () => {
  return (
    
    
    <div style={{ marginTop: "4rem", display:"flex", flexDirection: "column"}} className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-bicycle fa-3x mb-3"></i>
              <h5 className="card-title">Cycling</h5>
              <p className="card-text">Duration: 1 hour</p>
              <button className="btn btn-primary mx-1">Edit</button>
              <button className="btn btn-secondary ">Delete</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-walking fa-3x mb-3"></i>
              <h5 className="card-title">Walking</h5>
              <p className="card-text">Duration: 45 minutes</p>
              <button className="btn btn-dark">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-hiking fa-3x mb-3"></i>
              <h5 className="card-title">Hiking</h5>
              <p className="card-text">Duration: 30 minutes</p>
              <button className="btn btn-dark">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-swimmer fa-3x mb-3"></i>
              <h5 className="card-title">Swimming</h5>
              <p className="card-text">Duration: 1 hour</p>
              <button className="btn btn-dark">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-running fa-3x mb-3"></i>
              <h5 className="card-title">Running</h5>
              <p className="card-text">Duration: 45 minutes</p>
              <button className="btn btn-dark">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-motorcycle fa-3x mb-3"></i>
              <h5 className="card-title">Riding</h5>
              <p className="card-text">Duration: 30 minutes</p>
              <button className="btn btn-dark">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-hover table-secondary mb-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
            <td>20 min</td>
            <td>20-4-2022</td>
            <td>
              <button className="btn btn-secondary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Usman</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
            <td>25 min</td>
            <td>20-5-2022</td>
            <td>
              <button className="btn btn-secondary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Bunty</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
            <td>30 min</td>
            <td>25-4-2022</td>
            <td>
              <button className="btn btn-secondary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Exercise;
