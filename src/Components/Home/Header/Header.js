import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Headermain from '../HeaderMain/Headermain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Headermain></Headermain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;