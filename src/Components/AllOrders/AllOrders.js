import React from 'react';
import { Link } from 'react-router-dom';

const AllOrders = (props) => {
    const pitha = props.pitha;
    return (
        <table class="table table-hover shadow">
            <tbody>
                <tr>
                    <thead>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </thead>
                </tr>
                <tr>
                    <td>{pitha.name}</td>
                    <td>{pitha.price}</td>
                    <td>{pitha.email}</td>
                    <td>01</td>
                    <td><img style={{ width: "50px", height: "50px", boxShadow: "5px 5px 15px lightGray", borderRadius: "50%" }} src={pitha.imageURL} alt="" /></td>
                </tr>
            </tbody>
        </table>
    );
};

export default AllOrders;