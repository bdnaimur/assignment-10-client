import React, { useEffect, useState } from 'react';

const AllData = (props) => {
    console.log(props);
    const [display, setDisplay] = useState({
        yes: true
    });
    const pitha = props.pitha;
    const deletePitha = (event,id) => {
        const newDisplay = {...display};
            newDisplay.yes = false;
            setDisplay(newDisplay);
        console.log(event.currentTarget);
        console.log(id);
            fetch(`https://nameless-atoll-15862.herokuapp.com/delete/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            
            if(data){
                event.target.parentNode.style.display = 'none';
            }
        })
    }
    console.log(display);
    return (
        <div>
            {display.yes && <table class="table table-striped">
                <tbody>
                    <tr>
                        <td>{pitha.name}</td>
                        <td>{pitha.email}</td>
                        <td>Price: {pitha.price}</td>
                        <td><img style={{width:"50px", height:"50px"}} src={pitha.imageURL} alt=""/></td>
                        <td><button className="btn btn-warning">Edit</button></td>
                        <td><button onClick={() =>deletePitha('event', pitha._id)} className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>}
        </div>
    );
};

export default AllData;