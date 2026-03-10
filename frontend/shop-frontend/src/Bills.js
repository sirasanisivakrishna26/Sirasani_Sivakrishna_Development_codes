import { useEffect, useState } from "react"


import axios from 'axios';

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";


export default function Bills() {

    var [date1, setdate1] = useState();
    var [date2, setdate2] = useState();

    var [orderbills, setOrderbills] = useState([]);

    var [finalamount, setFinalamount] = useState([]);

    var [sales, setsales] = useState([]);

    function todayBills() {

        // alert("hhhhhhhhhh")
        axios.get("http://localhost:8085/bills?date1=" + date1 + "&date2=" + date2).then((res) => {
            setOrderbills(res.data)
        })
    }

    
    function getallSales() {

        axios.get("http://localhost:8085/getAllOders").then((res) => { 
        setsales(res.data);
        res.data.map(temp=>{
            console.log(temp.totalamount);
            console.log(temp.date)
        })
//             res.data.map(temp=>{   
//                 const localDate =temp.date;
//   const dateString = localDate.format(java.time.format.DateTimeFormatter.ISO_LOCAL_DATE);
//   console.log("date:"+dateString);

                // const currentDate = temp.date.toISOString().slice(0, 10);//
                // console.log("date"+currentDate);
            // }) 

        })

    }
    useEffect(getallSales, []);

    var salesamount = 0;

    function totalsales() {

        sales.map(temp => {

            salesamount = parseInt(salesamount) + parseInt(temp.totalamount);

            setFinalamount(salesamount);
        })

       
    }
    return (
        <div className="bills">
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
                                <Link to='/AdminDashBoard' className="nav-link text-light">Admin Dashboard</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container" >
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div class="card" style={{backgroundColor:"whitesmoke"}}>
                            <div class="card-body  text-center">
                                <b>Bills</b>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div class="card" style={{backgroundColor:"lightblue"}}>
                            <div class="card-body">

                                <div class="row">
                                    <div class="col-md-4 col-sm-12 col-12">
                                        <div class="card"  style={{backgroundColor:"lightcyan"}}>
                                            <div class="card-body">
                                                <h5 class="card-title">Enter required dates</h5>
                                                <p class="card-text">
                                                    <label>Enter Date1</label>
                                                    <input type="date" value={date1} onChange={(e) => { setdate1(e.target.value) }}></input>
                                                    <br></br>
                                                    <label>Enter Date2</label>
                                                    <input type="date" value={date2} onChange={(e) => { setdate2(e.target.value) }}></input>
                                                    <br></br>
                                                    <br></br>
                                                    <button type="button" class="btn btn-primary" onClick={todayBills}>Find Bills</button>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8 col-sm-12 col-12">
                                        <div class="card">
                                            <div class="card-body" style={{backgroundColor:"bisque"}}>
                                                <h5 class="card-title text-danger" style={{textAlign:"center"}}>Bills History</h5>
                                                <p class="card-text">

                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr className="text text-danger bg bg-info">
                                                                <th>Id</th>
                                                                <th>Bills</th>
                                                                <th>UserId</th>
                                                                <th>Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                orderbills.map(temp => {
                                                                    return (
                                                                        <tr>
                                                                            <td>{temp.id}</td>
                                                                            <td>{temp.totalamount}</td>
                                                                            <td>{temp.usersid}</td>
                                                                            <td>{temp.date}</td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="card text-center" style={{backgroundColor:"lightblue"}}>
                                        <div class="card-header">
                                            Total Sales Amount
                                        </div>
                                        <div class="card-body">
                                           <button type="button" onClick={totalsales} className="btn btn-success">Find Total Sales</button>
                                       
                                            
                
                                        </div>
                                        <h5 class="card-title">{finalamount}</h5>
        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>





    )
}