
import { useEffect, useState } from "react";

import axios from 'axios';

import { useNavigate } from "react-router-dom";

import { Link} from 'react-router-dom';



function CrudOnUser() {

    //userState array

    var [users, setUsers] = useState([]);
    var [id, setId] = useState();

    var [name, setName] = useState();
    var [email, setEmail] = useState();
   
    var [password, setPassword] = useState();

    //creating the object
    function getUsers() {
        axios.get("http://localhost:8085/getAllUsers").then((res) => {

            //updating the array
            setUsers(res.data);

            //updating count

        });
    }


    function deleteUser(deleteid) {
        var decision = window.confirm("Are you sure to delete task ");
        if (decision) {
            axios.get("http://localhost:8085/deleteUsersById?id=" + deleteid).then((rest) => { getUsers() });
            alert("User Deleted");
        }
    }


    function updateuser() {

        axios.get("http://localhost:8085/updateUsers?id=" + id +"&username="+name+"&email="+email+"&password="+password).then((rest) => { getUsers() });
        alert("Updated Successfull");
    }



    return (
        <div className="crudonusers"  style={{backgroundColor:"bisque"}}>
            <nav class="navbar navbar-expand-lg nb ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={"https://www.bing.com/th?id=OIP.s0I_dMcX1Ezo6A0H3HWCKgHaHa&w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} width="80px" class="d-inline-block align-top" alt="" />

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/AdminDashBoard' className="nav-link">Admin Dashboard</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div class="card" style={{backgroundColor:"lightsteelblue"}}>
                            <div class="card-body  text-center">
                               <h3><i> <b>Users List</b></i></h3>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 mb-3">
                        <div class="card">
                            <div class="card-body">

                                <button type="button" onClick={getUsers} className="btn btn-success">Refresh table</button>
                                <div className="my-table">
                                    <table className="table table-bordered users">
                                        <thead>
                                            <tr>
                                                <th className="text-success">Id</th>
                                                <th className="text-success">Name</th>
                                                <th className="text-success">Password</th>
                                                <th className="text-success">Email Id</th>
                                                <th className="text-success">Action</th>
                                               


                                            </tr>
                                        </thead>
                                        <tbody className="text-secondary">
                                            {
                                             users.map(temp => {
                                                    return (
                                                        <tr>
                                                            <td>{temp.id}</td>
                                                            <td>{temp.username}</td>
                                                            <td>{temp.password}</td>
                                                            <td>{temp.emial}</td>
                                                            <td>
                                                                <button type="button" onClick={e => deleteUser(temp.id)} className="btn btn-danger btn-sm">delete</button>

                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>

                                    </table>
                                </div>
                            </div>

                        </div>
                       
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="crudedit">
                    <div className="col-md-8 col-sm-12 col-12">
                        <div class="cards" style={{backgroundColor:"lightblue"}}>
                            <div class="card-body">
                                <div className="user">
                                <h5 class="card-title"><b>User Update</b></h5>
                                </div>
                                <p class="card-text">
                                    <div className="my-form text-dark" style={{textAlign:"center"}}>
                                        <form >
                                        <div className="form-group mb-3">
                                                <label>Item updated Id:-</label>
                                                <input className="form-control" type="number" value={id} onChange={e => setId(e.target.value)} />
                                            </div>
                                        
                                            <div className="form-group mb-3">
                                                <label>User updated Name:-</label>
                                                <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label>User updated Email:-</label>
                                                <input className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label>User updated Password:-</label>
                                                <input className="form-control" type="text" value={password} onChange={e => setPassword(e.target.value)} />
                                            </div>
                                           
                                            
                                            
                                            <button type="button"  className="bg-info"
                                            onClick={updateuser}>Submit Details</button>

                                        </form>
                                    </div>
                                </p>
                            </div>
                        </div>


                    </div>

                    

                </div>
                </div>
        </div>
    )
}

export default CrudOnUser;