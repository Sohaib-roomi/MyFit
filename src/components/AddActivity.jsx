// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import axios from "axios";

// const Addactivity = () => {
//   const [name, setname] = useState('')
//   const [description, setdescription] = useState('')
//   const [type, settype] = useState('')
//   const [duration, setduration] = useState('')
//   const [date, setdate] = useState('')


//  const changehandler=()=>{
//   console.log({name, description, type, duration, date });
//     saveToDb()
  
  
//   }
//   const saveToDb = async () => {

//     const body = { name,description, type, duration, date };
//     try {
//       const res = await axios.post(
//         "http://127.0.0.1:5000/exercises/add",
//         body
//       );
//       alert(res.data)
//     } catch (e) {
//       alert(e)

//     }

  
// };
//   return (
//     <>
    
//     <Sidebar />
//     <div
//       // style={{ marginTop: "4rem" }}
//       className="container outline-border d-flex flex-column justify-content-center  p-3 w-50"
//     >
//       <h2>Enter Activity Details</h2>
//       <hr />
//       <div>
//         <div className="form-group py-3">
//           <label htmlFor="name">name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e)=>{setname(e.target.value)}}
//             id="name"
//             placeholder="Enter activity name"
//           />
//         </div>
//         <div className="form-group py-3">
//           <label htmlFor="description">Description</label>
//           <input
//             type="text"
//             className="form-control"
//             value={description}
//             onChange={(e)=>{setdescription(e.target.value)}}
//             id="name"
//             placeholder="Enter name"
//           />
//         </div>
//         <div className="form-group py-3">
//           <label htmlFor="type">type</label>
//           <select className="form-control" id="type" value={type}
//           onChange={(e)=>{settype(e.target.value)}}>
//             <option value="">Select type</option>
//             <option value="Cycle">Cycle</option>
//             <option value="Walk">Walk</option>
//             <option value="Hike">Hike</option>
//             <option value="Swim">Swim</option>
//             <option value="Run">Run</option>
//             <option value="Ride">Ride</option>
//           </select>
//         </div>
//         <div className="form-group py-3">
//           <label htmlFor="duration">Duration</label>
//           <input
//             type="text"
//             className="form-control"
//             id="duration"
//             placeholder="Enter duration"
//             value={duration}
//             onChange={(e)=>{setduration(e.target.value)}}
//           />
//         </div>
//         <div className="form-group py-3">
//           <label htmlFor="datetime">Date & Time</label>
//           <input type="datetime-local" className="form-control" id="datetime"  value={date}
//             onChange={(e)=>{setdate(e.target.value)}}/>
//         </div>
//         <button onClick={changehandler} className="btn btn-secondary">
//           Submit
//         </button>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Addactivity;