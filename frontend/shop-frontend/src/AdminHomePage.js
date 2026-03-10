import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';



function AdminDashBoard() {
    const navigate = useNavigate();

  return (
    <div>
    <div className="adminhomepage">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {<img src={"https://www.bing.com/th?id=OIP.s0I_dMcX1Ezo6A0H3HWCKgHaHa&w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} width="80px" class="d-inline-block align-top" alt="" />}
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
          <Link to='/AdminDashBoard' className="nav-link active">Admin Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link to='/adduser' className="nav-link">Add User</Link>
        </li>
       
        <li class="nav-item">
          <Link to='/addproducts' className="nav-link">Add Product</Link>
        </li>
        <li class="nav-item">
          <Link to='/getproducts' className="nav-link">Get All Products</Link>
        </li>
        <li class="nav-item">
          <Link to='/crudonuser' className="nav-link">Crud On user</Link>
        </li>
        <li class="nav-item">
          <Link to='/crudonproducts' className="nav-link">Crud On Products</Link>
        </li>
        <li class="nav-item">
          <Link to='/addcoupon' className="nav-link">Add Coupon</Link>
        </li>
        <li class="nav-item">
          <Link to='/bulkupload' className="nav-link">Bulk Upload</Link>
        </li>
        <li class="nav-item">
          <Link to='/bills' className="nav-link">Bills</Link>
        </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sort Products
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="sortbyproductprice">By Product Price</a></li>
                  <li><a class="dropdown-item" href="sortbyproductcatogery">By Product Catogery</a></li>
                  <li><a class="dropdown-item" href="sortbyproductname">By Product Name</a></li>
                </ul>
              </li>
            </ul>
            <div>
              <button className='btn' onClick={() => { navigate('/') }}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="adminhomepage1">
      <nav >
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="addproducts">Add Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sortbyproductprice">sortbyproductprice</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sortbyproductcatogery">sortbyproductcatogery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sortbyproductname">sortbyproductname</a>
        </li>
      </ul>
      
      </nav>
      </div>
    </div>
    <div className='adminhomebody'>
      
    </div>
    
    </div>
  );
}

export default AdminDashBoard;

