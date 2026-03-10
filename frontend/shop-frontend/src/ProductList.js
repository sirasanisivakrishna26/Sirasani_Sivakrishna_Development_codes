
import { useEffect, useState } from "react";

import axios from 'axios';


import { useNavigate, Link } from "react-router-dom";


import AddProducts from "./AddProducts";



function ProductList() {

    //userState array

    var [products, setproducts] = useState([]);//inserting all milestones into the task array


    const quantity = 1;

    let date = new Date().toLocaleDateString();
    // const newdate=date.toISOString()


    //creating the object
    function getProducts() {
        axios.get("http://localhost:8085/getAllProducts").then((res) => {
            //updating the array
            setproducts(res.data);
        });
    }

    useEffect(getProducts, []);

    // var username=localStorage.getItem("username");

    function addTocart(name, price, category, quantities, totalamount) {

        var Quantities = 1;

        var usersid = localStorage.getItem("id");

        axios.get("http://localhost:8085/addtocart?name=" + name + "&category=" + category + "&price=" + price + "&usersid=" + usersid + "&quantities=" + Quantities + "&totalamount=" + totalamount).then((rest) => { getProducts() });
        alert("Product added");

    }
    function addToWishList(name, price, category) {

        var usersid = localStorage.getItem("id");

        axios.get("http://localhost:8085/addtowishlist?name=" + name + "&price=" + price + "&category=" + category + "&usersid=" + usersid).then((rest) => { });
        alert("Item added to Wishlist");
    }


    return (
        <div className="my-productsss" style={{backgroundColor:"lightcyan", width:"100%"}}>
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
            <div className="container" >
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-head  text-center text-danger" style={{backgroundColor:"bisque"}}>
                              <h3><i><b>Products in the Shop</b></i></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div className="my-table" style={{backgroundColor:"lightgray"}}>
                                    {
                                        products.map(temp => {
                                            return (

                                                <div className="producttable" >
                                                <div className="col-md-8 col-sm-12 col-12">
                                                    <br></br>
                                    
                                                <img src={temp.image} alt="pic" width="250" height="250"></img>
                                                    <h3 className="text-danger"> Id:-{temp.id}</h3>
                                                    <h3 className="text-warning">Name:-{temp.name}</h3>
                                                    <h3>Price:-{temp.price}</h3>
                                                    <h3>In Stocks:-{temp.stocks}</h3>
                                                    <h3  className="text-warning">Catogery:-{temp.category}</h3>
                                                    {/* <h3>Date:-{date}</h3> */}
                                                    <button type="button" onClick={() => addTocart(temp.name, temp.price, temp.category, temp.stocks, temp.price)} className="btn btn-success" style={{margin: "5px"}}>Add to cart</button>
                                                <button type="button" onClick={() => addToWishList(temp.name, temp.price, temp.category)} className="btn btn-success"style={{margin: "5px"}}>Add to wishlist</button>
                                                <hr></hr>
                                                <br></br>
                                    
                              
                                                <br></br>
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

export default ProductList;