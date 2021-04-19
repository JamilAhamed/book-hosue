import React from 'react';
import servicePicture from '../../images/Photography-Services-in-Bangladesh.png'

const AbouteService = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center offset-1">
            <div className="col-md-4 offset-1">
                <h2>Lets Know About Our service</h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam voluptates quae quisquam delectus recusandae non assumenda nesciunt nostrum incidunt eum.</p>
                <button class="btn btn-warning" type="button ">More</button>
                <h4 style={{color:'#ffc107'}}>Happy Customer 500+</h4>
            </div>
            <div className="col-md-6">
                <img src={servicePicture} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AbouteService;