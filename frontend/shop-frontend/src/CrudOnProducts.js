
import { useEffect, useState } from "react";

import axios from 'axios';

import { useNavigate, Link } from "react-router-dom";
import GetAllProducts from "./GetAllProduct";

function CrudOnProducts() {

    //userState array

    var [products, setProducts] = useState([]);//inserting all milestones into the task array

    var [id, setId] = useState();

    var [name, setName] = useState();
    var [price, setPrice] = useState();
    var [catogery, setCatogery] = useState();
    var [quantities, setQuantities] = useState();

    var [image, setimage] = useState();


    var [images, setImages] = useState("");





    //creating the object
    function getProduct() {
        axios.get("http://localhost:8085/getAllProducts").then((res) => {

            //updating the array
            setProducts(res.data);

        });
    }

    function updateItem() {

        var newimage = images.replace("C:\\fakepath\\", "./Images/");

        axios.get("http://localhost:8085/updateProducts?id=" + id + "&name=" + name + "&price=" + price + "&category=" + catogery + "&stocks=" + quantities + "&image=" + newimage).then((rest) => { getProduct() });
        alert("Item Updated");
    }

    function deleteTask(deleteid) {
        var decision = window.confirm("Are you sure to delete task ");
        if (decision) {

            axios.get("http://localhost:8085/deleteProductsById?id=" + deleteid).then((rest) => { getProduct() });
            alert("Task Deleted");
        }
    }

    return (
        <div className="my-crudonproducts" style={{ backgroundColor: "lightsteelblue" }}>
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
                    <div className="col-md-8 col-sm-12 col-12">
                        <div class="card-table">
                            <div class="card-body" className="ppp">
                                <h5 class="card-title"><b>Update Products</b></h5>
                                <p class="card-text"  style={{textAlign:"center"}}>
                                    <div className="my-form bg-warning text-dark">
                                        <form className="products">
                                            <div className="form-group mb-3">
                                                <label>Item updated Id:-</label>
                                                <input className="form-control" type="number" value={id} onChange={e => setId(e.target.value)} />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label>Item updated Name:-</label>
                                                <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>Item updatePrice</label>
                                                <input className="form-control" type="number" value={price} onChange={e => setPrice(e.target.value)} />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>Items updated Catogery</label>
                                                <input className="form-control" type="text" value={catogery} onChange={e => setCatogery(e.target.value)} />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>Items Quantity</label>
                                                <input className="form-control" type="number" value={quantities} onChange={e => setQuantities(e.target.value)} />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>Image Url</label>
                                                <input className="img" type="file" value={images} onChange={e => setImages(e.target.value)} />
                                            </div>


                                            <button type="button" className="bg-info"
                                                onClick={updateItem}>Submit Item</button>

                                        </form>
                                    </div>
                                </p>
                            </div>
                        </div>


                    </div>



                </div>



            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-12">
                    <div class="card"  style={{backgroundColor:"bisque"}}>
                        <div class="card-body">

                            <button type="button" onClick={getProduct} className="btn btn-success">Refresh table</button>
                            <div className="my-table">
                                {products.map(temp => {
                                    return (


                                        <div className="details2">
                                            <img src={temp.image} alt="pic" width="250" height="250"></img>
                                            <br></br>

                                            <h3 > <b className="text-danger">Name:-{temp.name}</b></h3>
                                            <h3 > <i className="text-danger">Price:-{temp.price}</i></h3>
                                            <h3  ><i className="text-danger">Quantities:-{temp.stocks}</i></h3>
                                            <h3 ><i className="text-danger">Catogery:-{temp.category}</i></h3>
                                            <button type="button" onClick={() => deleteTask(temp.id)} className="text-danger"> Delete</button>
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

    )
}

export default CrudOnProducts;