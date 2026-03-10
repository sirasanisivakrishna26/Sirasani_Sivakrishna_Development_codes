import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div className="app">
            <Navbar expand="lg" style={{ backgroundColor: "lightskyblue", padding:'10px',height:'60px'}}>
                <Container>
                    <Navbar.Brand href="#home" id="image" >
                        {/*<img src={logo} title="logo" alt="Img Unavailable"/>*/}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to={"/userlogin"} className="btn btn-primary" style={{margin:"10px"}}>User Login</Link>
                            <Link to={"/adminlogin"} className="btn btn-primary" style={{margin:"10px"}}>Admin Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <nav style={{ textAlign: "center", backgroundColor: "lightgoldenrodyellow" ,padding:"10px",  height: "75px"}}>
                <h1 style={{ color: "darkgoldenrod"}}><i>WELCOME to SHOP for HOME</i></h1>
            </nav>

            <header> 

            <div className="container">
                <br></br><br></br>
            <h4 style={{color:'black',textAlign:'center'}}><i>Best for any house hold products </i></h4>

            </div>
            </header>
            
        </div>

    );
}
export default Home;

