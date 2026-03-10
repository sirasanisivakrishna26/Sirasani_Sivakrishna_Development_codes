import { useEffect, useState } from "react";

import axios from 'axios';


import { useNavigate, Link } from "react-router-dom";
import AddProducts from "./AddProducts";


export default function MyWishlist() {

    //userState array

    var [wishlist, setWishlist] = useState([]);//inserting all milestones into the task array

    var [sum, setsum] = useState([]);




    function getwishlist() {



        axios.get("http://localhost:8085/getwishlist").then((res) => {
            setWishlist(res.data);
        });
    }

    useEffect(getwishlist, []);


    function addtoCart(name, category, price, totalamount) {
        var Quantities = 1;

        var usersid = localStorage.getItem("id");

        axios.get("http://localhost:8085/addtocart?name=" + name + "&category=" + category + "&price=" + price + "&usersid=" + usersid + "&quantities=" + Quantities + "&totalamount=" + totalamount).then((rest) => { });
        alert("Product added");

    }


    function remove(id) {
        var decision = window.confirm("Are you sure to delete task ");
        if (decision) {
            axios.get("http://localhost:8085/deleteWishlistsById?id=" + id).then((res) => {
                getwishlist()
                alert("deleted");

            });

        }

    }

    return (
        <div className="my-sortbyprice" style={{backgroundColor:"lavender"}}>
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
                        <div class="card" style={{backgroundColor:"bisque"}}>
                            <div class="card-head  text-center">
                                <h3><i><b>Products in the WishList</b></i></h3>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">

                    <div className="col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div className="my-table">
                                    {
                                        wishlist.map(temp => {
                                            return (


                                                <div >
                                                    <div class="card text-center" style={{backgroundColor:"wheat"}}> 

                                                        <div class="card-body">

                                                            <p class="card-text">
                                                                <h3> Id:-{temp.id}</h3>
                                                                <h3>Name:-{temp.name}</h3>
                                                                <h3>Price:-{temp.price}</h3>
                                                                <h2>Category:{temp.category}</h2>

                                                            </p>
                                                            
                                                        </div>
                                                        <div class="card-footer text-muted">
                                                        <a href="#">
                                                                <button onClick={() => addtoCart(temp.name, temp.category, temp.price, temp.price)} className="btn btn-success" style={{margin:"10px"}}>Add to cart</button>
                                                                <button className="btn btn-danger" onClick={() => remove(temp.id)} style={{margin:"10px"}}>Remove</button>

                                                            </a>
                                                        </div>
                                                    </div>
                                                   
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
