
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserMenu() {
    const navigate = useNavigate();
    const columnsPerRow = 3;
    const [data, setData] = useState([]);
    const [quantity, setquantity] = useState(1);


    return (
        <div>
            <div className="userhomepage">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            {<img src={"https://www.bing.com/th?id=OIP.s0I_dMcX1Ezo6A0H3HWCKgHaHa&w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} width="80px" class="d-inline-block align-top" alt="" />}
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav" >
                                <li class="nav-item">
                                    <Link to="/usermenu" className="nav-link active"> <p  className="text-light">User Menu</p>
                                    </Link>
                                </li>
                               

                                <li class="nav-item">
                                    <Link to='/useGetallproducts' className="nav-link" ><b className="text-light"><i>Get All Products</i></b></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/productlist' className="nav-link"><b className="text-light">ProductList</b></Link>
                                </li>
                               
                                <li class="nav-item">
                                    <Link to='/usersortbyprice' className="nav-link" ><b class="text-light"><i>Sort By Product Price</i></b></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/usersortbycatogery' className="nav-link"><b className="text-light"><i>Sort By Product Catogery</i></b></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/userSortbyname' className="nav-link"><b className="text-light"><i>Sort By Product Name</i></b></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/MyWish" className="nav-link"><b className="text-light"><i>MyWishList</i></b>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/cart' className="nav-link"><b className="text-light"><i>My cart</i></b></Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b><i className="text-light">Sort Products</i></b>
                                    </a>
                                   
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="usersortbyprice">By Product Price</a></li>
                                        <li><a class="dropdown-item" href="usersortbycatogery">By Product Catogery</a></li>
                                        <li><a class="dropdown-item" href="userSortbyname">By Product Name</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div>
                                <button className='btn'  onClick={() => { 
                                      localStorage.removeItem("username");
                                      navigate('/') }}><b className="text-light">Logout</b></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='userhomebody'>

            </div>

        </div>
    );
}

export default UserMenu;
