import React, { useState } from 'react';
import Order from './Order/Order';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    const [selectedOrder, setSelectedOrder] = useState([]);
     const OrderChange = order =>{
         setSelectedOrder(order);
     }
    const containerStyle = {
        backgroundColor: "hotpink",
        height:"100%"
    }

    fetch('http://localhost:5000/addorder',{
        method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({order:selectedOrder})
    })
    .then(res=>res.json())
    .then(data => setSelectedOrder(data))

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <Order onChange={OrderChange}></Order>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;