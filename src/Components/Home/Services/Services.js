import React from 'react';
import gayeholud from '../../../images/gayeholud.jfif'
import wedding from '../../../images/wedding.jfif'
import reception from '../../../images/personal.jfif'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const serviceData =[
    {
        name:'Gaye Holud',
        img: gayeholud,
    },
    {
        name:'Grand Wedding',
        img: wedding
    },
    {
        name:'Grand Reception',
        img: reception
    }
]

const Services = () => {
    return (
       <section className="services-container mt-5">
          <div className="d-flex justify-content-center">
          <h5 >OUR AWESOME </h5>  <h5 style={{color:'#ffc107'}}>PHOTOGRAPY</h5>
          </div>

          <div className=" d-flex justify-content-center">
            <div className="w-75 row mt-5">
            {
                serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            </div>
        </div>
       </section>
    );
};

export default Services;