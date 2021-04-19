import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faCameraRetro,faCamera,faVideo } from '@fortawesome/free-solid-svg-icons'

const infosData =[
    {
        title: 'silver-Tier',
        description:'24/7 Always with You',
        price:'5000 tk',
        icon:faCamera,
        background: 'warning',
        shadow:'shadow-lg'
    },
    {
        title: 'Gold-Tier',
        price:'10000 tk',
        description:'24/7 Always with You',
        icon:faCameraRetro,
        background: 'primary',
        shadow:'shadow-lg',
    },
    {
        title: 'Diamond-Tier',
        price:'15000 tk',
        description:'24/7 Always with You',
        icon:faVideo,
        background: 'warning',
        shadow:'shadow-lg'
    }
]

const BusinessInfo = () => {
    return (
        <section className=" d-flex justify-content-center">
            <div className="w-75 row ">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;