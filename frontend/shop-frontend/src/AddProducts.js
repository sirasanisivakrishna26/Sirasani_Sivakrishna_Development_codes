
import { useEffect, useState } from "react";

import axios from 'axios';

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
function AddProducts() {

    //userState array

    var [items, setItems] = useState([]);//inserting all milestones into the task array

    var [name, setName] = useState();
    var [price, setPrice] = useState();
    var [catogery, setCatogery] = useState();
    var [quantities, setQuantities] = useState();

    var [image, setimage] = useState([]);

    var [images, setImages] = useState("");

    //creating the object

    function getImage() {
        axios.get("http://localhost:3002/products").then((res) => { setimage(res.data)

        });
    }

    function addProduct() {
    
        var newimage=images.replace("C:\\fakepath\\","./Images/");

        axios.get("http://localhost:8085/addProducts?name="+name+"&price="+price+"&category="+catogery+"&stocks="+quantities+"&image="+newimage).then((rest) => {});
        alert("Item added");

        
        // var image={
        //     images:images.replace("C:\Html\react\shopforhouse_capstone\public\Images","")
        // }
        // axios.post("http://localhost:3002/images",image).then((res) => getImage());

    }

    return (

        <div className="my-products">
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
            <div className="container" style={{textAlign:"center"}}>
                <div className="addproduct">
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"style={{backgroundColor:"lightskyblue"}} ><b>Add Items Here</b></h5>
                                <p class="card-text">
                                    <div className="my-form  text-dark" style={{backgroundColor:"lightsteelblue"}}>
                                        <form className="my-form text-danger" >
                                            <div className="form-group mb-3">
                                                <label>Item Name:-</label>
                                                <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>Item Price</label>
                                                <input className="form-control" type="number" value={price} onChange={e => setPrice(e.target.value)} />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>Items Catogery</label>
                                                <input className="form-control" type="text" value={catogery} onChange={e => setCatogery(e.target.value)} />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>Item Stockes</label>
                                                <input className="form-control" type="number" value={quantities} onChange={e => setQuantities(e.target.value)} />
                                            </div>
                                            <div className="form-group mb-3">

                                                <label>Image Url</label>
                                                <input className="img" type="file" value={images} onChange={ e => setImages(e.target.value)} />
                                            </div>

                                            <button type="button" className="bg-info"
                                                onClick={addProduct}>Submit Item</button>

                                        </form>
                                    </div>
                                </p>
                            </div>
                        </div>


                    </div>
                    </div>



                </div>



            </div>
        </div>
    )
}

export default AddProducts;