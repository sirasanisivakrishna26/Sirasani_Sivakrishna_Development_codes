import { useState } from "react"


import axios from 'axios';
import { Link } from "react-router-dom";

export default function AddCoupon() {

    var [disname, setDisname] = useState();
    var [usersid, setusersId] = useState();
    var [disprice, setPrice] = useState();

    function addcoupon() {
        axios.get("http://localhost:8085/addcoupons?disname=" + disname + "&usersId=" + usersid + "&discountAmount=" + disprice).then((res) => {
            alert("Added successsfully")
        }
        )
    }

    return (
        <div className="discount"> 

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
            <div className="row">
                <div className="col-md-6 col-sm-12 col-12" style={{marginLeft:"28%"}}> 
                    <div className="ad" style={{marginTop:"55px"}}>

                        <div class="card " style={{backgroundColor:"burlywood"}}>
                            <div class="card-header text-center">
                                ---------Applay Coupon Here-----
                            </div>
                            <div class="card-body">
                                <p class="card-text">

                                    <div className="form-group">
                                        <label>Enter dicountCouponName</label>
                                        <input type="text"  required value={disname} placeholder="Enter disCountAmount" className="form-control" onChange={e => setDisname(e.target.value)}></input>

                                    </div>

                                    <div className="form-group">
                                        <label>Enter discountAmount</label>
                                        <input type="number" required value={disprice} placeholder="Enter disCountAmount" className="form-control" onChange={e => setPrice(e.target.value)}></input>

                                    </div>
                                    <div className="form-group">
                                        <label>Enter userId</label>
                                        <input type="number" required value={usersid} placeholder="Enter userId" className="form-control" onChange={e => setusersId(e.target.value)}></input>

                                    </div>
                                    <br></br>
                                </p>
                                <button type="button" onClick={addcoupon} className=" btn btn-primary" > Add Coupon </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

{/* <div className="form-group">
                        <label>Enter dicountCouponName</label>
                        <input type="number" required value={disname} placeholder="Enter disCountAmount" className="form-control" onChange={e => setDisname(e.target.value)}></input>

                    </div>

                    <div className="form-group">
                        <label>Enter discountAmount</label>
                        <input type="number" required value={disprice} placeholder="Enter disCountAmount" className="form-control" onChange={e => setPrice(e.target.value)}></input>

                    </div>
                    <div className="form-group">
                        <label>Enter userId</label>
                        <input type="number" required value={usersid} placeholder="Enter userId" className="form-control" onChange={e => setusersId(e.target.value)}></input>

                    </div>
                    <br></br>

                    <button type="button" onClick={addcoupon} className=" btn btn-primary" > Add Coupon
                    </button> */}