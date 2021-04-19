import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 style={{color:'#ffc107'}}>Contact</h5>
                    <h2>Anytime Contact With Us</h2>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="First Name *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Last Name *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Type of our Service *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control"  placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-warning"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;