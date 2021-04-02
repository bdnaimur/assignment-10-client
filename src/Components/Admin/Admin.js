import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Admin.css'
import AllData from '../AllData/AllData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'


// const element = <FontAwesomeIcon icon={faPlusSquare} />

const Admin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);
  const [pithaWithUser, setPithaWithUser] = useState([]);
  const [clicked, setClicked] = useState({
    manage: false,
    add: false,
    edit: false
  });

  useEffect(()=>{
    const url = `https://nameless-atoll-15862.herokuapp.com/pithaAllUser`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>{
      console.log(data);
      setPithaWithUser(data)})
},[])
  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: imageURL,
      price: data.price
    };
    console.log(eventData);
    const url = `https://nameless-atoll-15862.herokuapp.com/addPithas`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'd19020804cf08b620bfc1f44127a586c');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const handleAddClick = e =>{
    const addclicked = {...clicked};
    addclicked.add = true;
    addclicked.manage = false;
    setClicked(addclicked);
  }
  const handleManageClick = e =>{
    const addclicked = {...clicked};
    addclicked.manage = true;
    addclicked.add = false;
    setClicked(addclicked);
  }
  const handleEditClick = e =>{
    const addclicked = {...clicked};
    addclicked.edit = true;
    addclicked.add = false;
    setClicked(addclicked);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 manage-product">
          <span onClick={handleManageClick}><span className="icon-style"><FontAwesomeIcon icon={faTasks} /></span><span>Manage Product</span></span><br/>
            <span onClick={handleAddClick}><span className="icon-style"><FontAwesomeIcon icon={faPlusSquare} /></span><span>Add Product</span></span><br/>
            <span className="last-menu" onClick={handleEditClick}><span className="icon-style"><FontAwesomeIcon icon={faEdit} /></span><span>Edit Product</span></span>
            
          </div>
          
            <div className="col-md-8">
              {pithaWithUser.length === 0 && <div style={{textAlign:"center"}}>
                                                <div class="spinner-border text-info" role="status">
                                                <span class="sr-only">Loading...</span>
                                                </div>
                                              </div>}
            {clicked.add ? 
              <form className="shadow p-5" onSubmit={handleSubmit(onSubmit)}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Pitha Name</label>
                    <input name="name" type="text" class="form-control" id="inputEmail4" placeholder="Add Pitha Name" ref={register} />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">Price</label>
                    <input type="text" name="price" class="form-control" id="price" placeholder="Add Price" ref={register} />
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlFile1">Select Image </label>
                  <br/>
                  <input name="exampleRequired" type="file" class="form-control-file" id="exampleFormControlFile1" onChange={handleImageUpload} />
                </div>
                <br />
                <input className="btn btn-info" type="submit" />
              </form>
               :<h6>Please Select Edit if you want to add product</h6>}
               {clicked.manage ? <div>
                                      {/* <table class="table"> */}
                                        {/* <tr>
                                          <th scope="col">Name</th>
                                          <th scope="col">Email</th>
                                          <th scope="col">Price</th>
                                          <th scope="col">Image</th>
                                          <th scope="col">Edit</th>
                                          <th scope="col">Delete</th>
                                        </tr>
                                      </table> */}
                                      {pithaWithUser.map(pitha => <AllData pitha = {pitha}></AllData>)}          
                                </div> : <h6>Please Select manage if you want to Edit or Delete</h6>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;