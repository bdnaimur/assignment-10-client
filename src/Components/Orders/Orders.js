import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import AllOrders from '../AllOrders/AllOrders';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [pitha, setPitha] = useState([]);
    let dependency = 0;
    useEffect(() => {
        const url = `https://nameless-atoll-15862.herokuapp.com/pithaUser?email=${loggedInUser.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPitha(data))
            dependency = 1
    }, [dependency])
    console.log(pitha);
    return (
        // <div className="container">
        //     <div className="row">
        <div>
            <h4>Welcome {loggedInUser.displayName}, Your Orders: </h4>
            <table class="table table-hover shadow">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Email</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
            </table>
            {pitha.length === 0 && <div style={{textAlign:"center"}}>
                                                <div class="spinner-border text-info" role="status">
                                                <span class="sr-only">Loading...</span>
                                                </div>
                                              </div>}
            {pitha.map(pth => <AllOrders pitha={pth}></AllOrders>)}
        </div>
        //     {/* </div>
        //     {/* <div className="row">
        //         <div className="col-md-9"></div>
        //         <div className="col-md-3">
        //             <Link to="/"><button className="btn btn-success">Payment</button></Link>
        //         </div>
        //     </div> */}
        // </div> */}
    );
};

export default Orders;