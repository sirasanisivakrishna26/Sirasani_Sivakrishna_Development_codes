

import { useEffect, useState } from "react";

import axios from 'axios';

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Adduser() {

  var [users, setUsers] = useState([]);
  var [name, setName] = useState();
  var [email, setEmail] = useState();
  var [password, setPassword] = useState();

 

  function addusers(e) {
    e.preventDefault();
    axios.get("http://localhost:8085/addAllUsersss?username="+name+"&email="+email+"&password="+password).then((res) => {
      alert("Registration successfull");
    })
  
  }

  function getuser() {
    axios.get("http://localhost:3002/users").then((res) => { setUsers(res.data) });

  }

  const nav=useNavigate();
  return (
    <div className="abcd">
    <div className="row login-div">
    <div className="offset-lg-3 col-lg-6">
        <form className="container" style={{padding:'50px'}}>
            <div className="card" style={{backgroundColor:'burlywood'}}>
                <div className="card-header">
                    <h2>Add User</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>User Name <span className="errmsg">*</span></label>
                        <input type= "text" value={name} onChange={e => setName(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Email <span className="errmsg">*</span></label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Password <span className="errmsg">*</span></label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"></input>
                    </div>
                    
                </div>
                <div className="card-footer">

                    <button type="button" onClick={addusers} className="btn btn-primary">Add User</button> 
                   
                </div>
            </div>
        </form>
    </div>
</div>
</div>
  );
}

export default Adduser;
