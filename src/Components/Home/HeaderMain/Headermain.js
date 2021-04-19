import React from 'react';
import HeaderPicture from '../../../images/no2.jpg'

const Headermain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center offset-1">
            <div className="col-md-6">
                <img src={HeaderPicture} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-4 offset-1">
                <h2>Your New Lifes <br/>Journey  Start With Us</h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam quis nemo quasi. Maxime, esse?</p>
                <button type="button" class="btn btn-warning" >GET APPOINTMENT</button>
            </div>
        </main>
    );
};

export default Headermain;