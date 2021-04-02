import React, { useEffect, useState } from 'react';

import Pithas from '../Pithas/Pithas';

const Home = () => {
    const [pitha, setPitha] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5055/pithas`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPitha(data))
    },[])
    return (
        <div className="container">
            <div className="row">
            {pitha.map(pth => <Pithas pitha = {pth}></Pithas>)}
            </div>
        </div>
    );
};

export default Home;