
import { useEffect, useState } from "react";

import axios from 'axios';

import { useNavigate , Link } from "react-router-dom";



function UserSortByProductCatogery() {

    //userState array

    var [items, setItems] = useState([]);//inserting all milestones into the task array


    

    //creating the object
    function getProducts() {
        axios.get("http://localhost:8085/sortProductsByCategory").then((res) => {

            //updating the array
            setItems(res.data);
        });
    }
   

    useEffect(getProducts,[]);


    return (
        <div className="my-sortbyprice">
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
                                <Link to='/usermenu' className="nav-link">User Dashboard</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div class="card"style={{backgroundColor:"lightgoldenrodyellow"}}>
                            <div class="card-head  text-center">
                            <h3><i><b>Sort By Catogery</b></i></h3>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div class="card" style={{backgroundColor:"wheat"}}>
                            <div class="card-body">
                                <div className="my-table">
                                {
                                                items.map(temp => {
                                                    return (
                                                        
                                                        <div className="details4">
                                                        <img src={temp.image} alt="pic" width="250" height="250"></img>
                                                        <br></br>

                                                        <h3 > <b className="text-danger">Name:-{temp.name}</b></h3>
                                                        <h3 > <i className="text-danger">Price:-{temp.price}</i></h3>
                                                        <h3  ><i className="text-danger">Quantities:-{temp.stocks}</i></h3>
                                                        <h3 ><i className="text-danger">Catogery:-{temp.category}</i></h3>
                                                        <hr className="text-danger"></hr>


                                                    </div>

                                                           
                                                           

                                                        
                                                    )
                                                })
                                }
                        
                                </div>
                            </div>

                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSortByProductCatogery;