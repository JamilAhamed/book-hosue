import React from 'react';
import './Footer.css';
import FooterCol from '../../Home/FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   
    const ourAddress = [
        {name: "Saidpur-Nilphamari" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const QuickLinks = [
        {name: "Quick links" , link: "/quicklinks"},
        {name: "rental" , link: "/rental"},
        {name: "tour photography" , link: "/tour-photography"},
        {name: "Personal photograohy" , link: "/personal-photography"},
        {name: "birthday" , link: "/bithday"}
        
    ]
    const services = [
        {name: "grand weeding" , link: "/wedding"},
        {name: "gaye holud" , link: "/gayeholud"},
        {name: "Personal photograohy" , link: "/personal-photography"},
        {name: "reception" , link: "/reception"},
        {name: "birthday" , link: "/birthday"},
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5"> 
                    <FooterCol key={4} menuTitle="Quick Links" menuItems={QuickLinks}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-warning">0172345687</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;