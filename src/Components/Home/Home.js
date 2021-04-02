import React, { useEffect, useState } from 'react';

import Pithas from '../Pithas/Pithas';

const Home = () => {
    const [pitha, setPitha] = useState([]);
    
    useEffect(()=>{
        const url = `https://nameless-atoll-15862.herokuapp.com/pithas`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPitha(data))
    },[])
    return (
        <div className="container">
            <div className="row">
                {pitha.length === 0 && <div style={{textAlign:"center"}}>
                                            <div class="spinner-border text-info" role="status">
                                            <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>}
            {pitha.map(pth => <Pithas pitha = {pth}></Pithas>)}
            </div>
        </div>
    );
};

export default Home;