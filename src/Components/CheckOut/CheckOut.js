import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const CheckOut = () => {
    const { pithaId } = useParams();
    const [product, setProduct] = useState([] || 1);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        const url = "https://nameless-atoll-15862.herokuapp.com/pithas";
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const clickedPitha = data.find(dt => dt._id === pithaId);
                setProduct(clickedPitha);
            })
    }, [pithaId])
    const handleClick = () => {
        const productWithUser = {...product};
        productWithUser.email = loggedInUser.email;
        productWithUser.displayName = loggedInUser.displayName;
        console.log(productWithUser);
        const url = "https://nameless-atoll-15862.herokuapp.com/addProductWithUser";
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(productWithUser)
          })
          .then(res => console.log('server side response', res)) 
    }
    return (
        <div className="container">
            <div className="row">
                <h4>CheckOut</h4>
                <table class="table table-hover shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>01</td>
                            <td><img style={{ width: "60px", height: "60px", boxShadow: "5px 5px 15px lightGray", borderRadius: "50%" }} src={product.imageURL} alt="" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3">
                    <Link to="/orders"><button onClick={handleClick} className="btn btn-success">Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;