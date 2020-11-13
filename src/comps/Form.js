import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import addItem from './Script'

function Form() {
    return (

            <div className="container">


<div className='mr-auto ml-auto text-center my-5'>
    <h1 className='basiccolor'>Form for Sell Something</h1>
</div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control col-md-8" id="inputTitle" placeholder="Product title..." />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        {/* <input type="text" className="form-control col-md-8" id="inputDescription" placeholder="Describe your product in detail" /> */}
                        <textarea className="form-control col-md-8" id="inputDescription" placeholder="Describe your product in detail" rows="3"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputtext" className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10 input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">Rs</div>
                        </div>
                        <input type="number" className="form-control col-md-4" id="inputPrice" placeholder="Your Product Price?" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputtext" className="col-sm-2 col-form-label">Number</label>
                    <div className="col-sm-10 input-group">
                        <input type="number" className="form-control col-md-4" id="inputNumber" placeholder="Your active number" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputtext" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10 input-group">
                    <input type="file" className='btn btn-outline-info' id='upload' />
                    </div>
                </div>
               
                <div className="form-group row">
                    <label htmlFor="inputtext" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10 input-group">
                <button onClick={addItem()} className="btn btn-info px-5" id="postbtn">Post now</button>
                   
                    </div>
                </div>
               
               
            </div>

    )
}


export default Form;