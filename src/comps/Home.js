import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import addItem from './Script'

function HomePage() {
    return (

        <div className="container-fluid my-5">
        <h3 className="basiccolor headingsizing">Fresh recommendations</h3>
            <div className="row  home-page" id="card_create">


                <div className="col col-md-3 col-sm-6 inlineelement">
                    <div className="card">
                        <img className="card-img-top" src={require("./images/download.jpg")} height="120" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="basiccolor">RS:1234</h4>
                            <h6>Mobile</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default HomePage;