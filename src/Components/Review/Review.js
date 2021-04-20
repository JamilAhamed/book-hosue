import React from 'react';
import { useForm } from "react-hook-form";

const Review = ({appointmentOn,date,name,email}) => {
    const { handleSubmit } = useForm();
     
    const onSubmit = data =>{
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        data.name = name;
        data.email = email;
       console.log(data);
       
        fetch('http://localhost:5000/addPicture',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(success =>{
            alert('review submitted SuccessFully')
        })
    }

    return (
        <section className="review my-5 py-5">
            <div className="text-center mb-5">
                <h1 style={{ color: '#ffc107' }}>Jamils Photography</h1>
                <h3 style={{ color: 'hotPink' }}>Write Review About Our Service</h3>
                <div className="col-md-9 mx-auto">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Full Name " />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"name="email" placeholder="Email Address " />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control"name="description" placeholder="Description "></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-warning"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;