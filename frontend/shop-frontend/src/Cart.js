
import { useEffect, useState } from "react";

import axios from 'axios';


import { useNavigate, Link } from "react-router-dom";

import AddProducts from "./AddProducts";

import moment from 'moment';


function Cart() {

    //userState array

    var [carts, setCarts] = useState([]);//inserting all milestones into the task array

    var [sum, setsum] = useState([]);

    var [userId, setUserId] = useState();

    var [couponname, setCouponname] = useState([]);

    var [discountamount, setdiscountamount] = useState([]);

    var [getallcoupons, setCoupons] = useState([]);

    var [finalamount, setFinalamount] = useState();

    var [sales, setsales] = useState([]);

    var [getproduct, setProducts] = useState();

    var [getid, setId] = useState();
    var [stockes, setStockes] = useState();
    var [getimage, setImage] = useState();
    var [images, setImages] = useState();

    //creating the object
    function getCart() {
        axios.get("http://localhost:8085/getCarts").then((res) => {
            setCarts(res.data);
        });
    }

    useEffect(getCart, []);

    function getwishlist() {


        var temp = {

        }

        axios.post("http://localhost:3002/wishlist", carts).then((res) => {
            setCarts(res.data);
        });
    }

    useEffect(getwishlist, []);



    // useEffect(getProducts, []);


    // function remove(id) {
    //     var decision = window.confirm("Are you sure to delete task ");
    //     if (decision) {
    //         axios.delete("http://localhost:3002/cart/" + id).then((res) => {
    //             getCart()
    //             alert("deleted");

    //         });

    //     }

    // }

    var userssid = localStorage.getItem("id");

    function getdiscount() {

        // var userssid=localStorage.getItem("id");
        // alert(userssid);

        axios.get("http://localhost:8085/getbyuserid?usersId=" + userssid).then((res) => {
            // setdiscountamount(res.data);
            // setCouponname(res.data);
            res.data.map(temp => {

                console.log("discountAmount" + temp.discountAmount);
                setCouponname(temp.discountCouponName);
                setdiscountamount(temp.discountAmount);
                setUserId(temp.userId);



            })

        })

        if (userssid == userId) {
            alert("");
        }
        else {
            alert("You don't have any coupons");
        }


    }

    var totalAmount = 0;
    var totalamountis = 0;



    function incDec(a, b, c, d, e, f, userssid, category, dd) {

        if (c === "dec") {

            if (a === 1) {
                a = 1;
            }
            else {
                a -= 1;
            }
        }
        else {
            if (a === 20) {
                a = 20;
                alert("Quantity cannot exceed 20");
                return;
            }
            else {

                a += 1;
                alert(a)
                // alert(dd);              //quantities
            }
        }

        var userssid = localStorage.getItem("id");

        axios.get("http://localhost:8085/updatecart?id=" + b + "&name=" + d + "&category=" + category + "&price=" + e + "&usersid=" + userssid + "&totalamount=" + (e * a) + "&quantities=" + a).then((rest) => { getCart() });
        alert("Cart Updated");
        // alert(totalamountis);


        // alert(d);


        axios.get("http://localhost:8085/searchbyname?name=" + d).then((res) => {
            getProducts();
            //     //updating the array
            // alert(d);
            res.data.map(temp => {
                // alert(temp.name);
                // alert(temp.id)
                // alert(temp.stocks);

                setId(temp.id);

                setStockes(temp.stocks);
                setImages(temp.image)
                // alert(temp.image);

                var tempimg = "./Images/" + images;
                //setImage(newimage);

                // alert(temp.id)

                if (c == "dec") {

                    axios.get("http://localhost:8085/updateProducts?id=" + temp.id + "&name=" + d + "&price=" + e + "&category=" + category + "&stocks=" + ((temp.stocks) + 1) + "&image=" + temp.image).then((rest) => { });
                    alert("Product Updated");
                }
                else {
                    axios.get("http://localhost:8085/updateProducts?id=" + temp.id + "&name=" + d + "&price=" + e + "&category=" + category + "&stocks=" + ((temp.stocks) - 1) + "&image=" + temp.image).then((rest) => { });
                    alert("Product Updated");


                    if ((temp.stocks) < 10) {
                        // axios.get("http://localhost:8085/sendmail?email=capstoneshopforhome@gmail.com").then((res) =>(()))
                    }

                }


            })
            //-------Trigger mail towards owner when stockes less then 10
            if ((stockes - a) < 10) {
                // axios.get("").then((res) =>(()))
            }



            // if(temp.stocks<10){

            // }

        })

    }

    function getProducts() {
        axios.get("http://localhost:8085/getAllProducts").then((res) => {
            //updating the array
            setProducts(res.data);
        });
    }


    useEffect(getProducts, []);

    // function updateProducts(){
    //     axios
    // }


    // let date = new Date().toLocaleDateString();

    function ordesrs() {

        // const date = new Date().toLocaleDateString();
        // const myDate = moment(date, "MM/DD/YYYY");

        // const newdate=myDate.toISOString();
        // let datess=newdate.toLocaleString();

        const currentDate = new Date().toISOString().slice(0, 10);


        //         const dateString = "03/17/2023";
        // // const myDate = moment(dateString, "MM/DD/YYYY");
        // const isoDateString = myDate.toISOString();

        axios.get("http://localhost:8085/addOrders?usersid=" + userssid + "&totalamount=" + (totalAmount - discountamount) + "&date=" + currentDate).then((res) => {

            alert("Product Placed Successfully");
        });



        axios.get("http://localhost:8085/deleteAllcarts").then((res) => {
            getCart();
            // alert("deleted Successfully");
        })
    }


    function deleteTask(deleteid) {
        var decision = window.confirm("Are you sure to delete task ");
        if (decision) {

            axios.get("http://localhost:8085/deletecartById?id=" + deleteid).then((rest) => { getCart() });
            alert("Cart Product Deleted");
        }
    }


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
                        <div class="card">
                            <div class="card-head  text-center">
                                <b>Products in the Cart</b>
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


                                        carts.map(temp => {
                                            return (
                                                <div>

                                                    <div>

                                                        <div class="card border-success mb-3">

                                                            <div class="card-body text-success">
                                                                <h5 class="card-title"></h5>
                                                                <p class="card-text">

                                                                    <h3>Name:-{temp.name}</h3>
                                                                    <h3>Price:-{temp.price}</h3>
                                                                    <h3>Quantities:-{temp.quantities}</h3>
                                                                    <h2>Category:-{temp.category}</h2>

                                                                    <div className="order-card">

                                                                        <div className="order-qty">

                                                                            <div className="order-price">Rs: {totalamountis = (temp.quantities * temp.price)}</div>
                                                                            <button className="qty-btn"
                                                                                onClick={() => incDec(temp.quantities, temp.id, "dec", temp.name, temp.price, temp.date, temp.username, temp.category, (temp.quantities * temp.price))}>-</button>
                                                                            <input type="text" className="qty-input" value={temp.quantities} />

                                                                            <button className="qty-btn" onClick={() => incDec(temp.quantities, temp.id, "inc", temp.name, temp.price, temp.date, temp.username, temp.category, (temp.quantities * temp.price))}>+</button>
                                                                        </div>
                                                                        <div className="order-price">Rs: {totalamountis = (temp.quantities * temp.price)}</div>
                                                                        {/* <input type="number"   readonly onChange={e =>setsum(parseInt(totalamountis))}></input> */}



                                                                        <button className="delete-btn" onClick={() => deleteTask(temp.id)}>Remove</button>

                                                                    </div>
                                                                </p>
                                                            </div>
                                                            <div className="card-footer bg-transparent border-success text-dark">

                                                                <h2 className="text-danger">TotalAmount:-{totalamountis}</h2>

                                                                <h4 className="text-info"> Coupon-Name:-{couponname}</h4>
                                                                <h3>Discount Amount:-{discountamount}</h3>
                                                                {/* <h4>======={totalAmount}======</h4> */}


                                                            </div>
                                                        </div>



                                                        <div className="text-light">

                                                            {
                                                                totalAmount = totalAmount + (parseInt(temp.price) * parseInt(temp.quantities))
                                                            }

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
                {/* <input type="number"  value={userId} onChange={e=>setUserId(e.target.value)}></input> */}

                <button type="button" onClick={getdiscount} className="btn bg-danger">Check Coupon</button>
                {/* {
                couponname.map(temp=>{
                    return(
                        <div>
                            <h1>Coupon name Is:-{temp.discountCouponName}</h1>
                            </div>
                    )
                })
               } */}
                <br></br>
                <h2>TotalAmount AfterDiscount:{totalAmount - discountamount}</h2>
                <button type="button" onClick={ordesrs} className="btn bg-info">Place Order</button>
            </div>
        </div>
    )
}

export default Cart;