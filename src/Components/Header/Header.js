import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const cpName = {
        fontWeight : "700",
        color: "lightGreen",
        marginTop: "20px",
        textShadow: "2px 2px 5px lightGray"
    }
    return (

        <section class="background-color">
            <nav class="navbar navbar-expand-lg navbar-light sticky-top">
                <div class="container mt-4">
                    <a class="navbar-brand" href="#"><h1 style={cpName} className="cp-name">Testy Pitha</h1>
                        <img class="logo border" src="logo/logo.jpg" alt="" />
                    </a>
                    <button class="navbar-toggler mt-4 border" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse margin ms-5" id="navbarNav">
                        <ul class="navbar-nav m-auto fw-bold">
                            <li class="nav-item">
                                {/* <a class="nav-link" aria-current="page" href="/home">Home</a> */}
                                <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/admin">Admin</a> */}
                                <Link class="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/orders">Orders</a> */}
                                <Link class="nav-link" to="/orders">Orders</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/deals">Deals</a> */}
                                <Link class="nav-link " to="/deals">Deals</Link>
                            </li>
                            {/* <Link class="nav-item nav-link" to="/home">Home <span class="sr-only">(current)</span></Link> */}
                            {/* <Link class="nav-item nav-link" to="/admin">Admin</Link> */}
                            {/* <Link class="nav-item nav-link" to="/orders">Orders</Link> */}
                            {/* <Link class="nav-item nav-link " to="/deals">Deals</Link> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;