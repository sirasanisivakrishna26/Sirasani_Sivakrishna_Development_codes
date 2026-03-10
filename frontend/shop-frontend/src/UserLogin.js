
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import { BrowserRouter } from 'react-router-dom';
import { Routes,Route ,Link} from 'react-router-dom';


import './index.css';


function UserLogin() {

    var [username, setUsername] = useState();
    var [password, setPassword] = useState();

    var [users, setUsers] = useState([]);
    var nav = useNavigate();

    function getalluser(){
        axios.get("http://localhost:8085/getAllUsersssss").then((res) => { setUsers(res.data) });

    }
    useEffect(getalluser,[]);

    function userverify() {

        var check = 0;
        users.map(temp => {
            if ((username.localeCompare(temp.name) && password.localeCompare(temp.password))==0) {
                check = 1;
              
                localStorage.setItem("id", temp.id);
                localStorage.setItem("username",temp.name);


            }

        })

        if (check == 1) {
            localStorage.setItem("login", "1");
            alert("login success");
            nav("/usermenu")
        }


    }

    useEffect(userverify, []);


    return (
        <div className="image">
            <div className="row login-div">
            <div className="offset-lg-3 col-lg-6" style={{marginTop:"80px"}}>
                <form className="container" style={{padding:'50px'}}>
                    <div className="card" style={{backgroundColor:"burlywood"}}>
                        <div className="card-header">
                            <h2>Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"></input>
                            </div>
                            
                        </div>
                        <div className="card-footer">

                            <button type="button" className="btn btn-primary" onClick={userverify}>Login</button> 
                            <div style={{textAlign: 'right'}}>
                            New user ? <Link className="btn btn-primary" to={'/UserRegister'}>Register here</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}
export default UserLogin;
