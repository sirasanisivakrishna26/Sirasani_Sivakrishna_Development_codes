

import { useEffect, useState } from "react";

import axios from 'axios';

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import readXlsxFile from 'read-excel-file';

export default function Bulkupload() {


    var [file, setFile] = useState([]);



    function read() {

        var input = document.getElementById("input");

        readXlsxFile(input.files[0]).then((rows) => {
            rows.map(temp => {
                console.log("-----------------");
                console.log(temp[0]);
                console.log(temp[1]);
                console.log(temp[2]);
                console.log(temp[3]);
                console.log(temp[4]);

                //send the data to my spring boot : axios
                axios.get("http://localhost:8085/addProducts?name=" + temp[0] + "&price=" + temp[1] + "&category=" + temp[2] + "&stocks=" + temp[3] + "&image=" + temp[4]).then((rest) => { })
                alert("products added");
            })
        })
    }

    return (
        <div className="bulkupload">
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

            <div class="card text-center" style={{marginLeft:"20%",marginRight:"20%",marginTop:"50px",backgroundColor:"lightyellow"}} >
                <div class="card-header">
                    <h2>Upload excel file</h2>
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <input type="file" id="input" />
                    </p>
                    <button type="button" onClick={read} className="btn btn-dark" >Upload</button>
                </div>

            </div>

        </div>
    )


}