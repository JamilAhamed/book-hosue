import React from 'react';
import './InfoCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 justify-content-center">
            <div className={`info-container info-${info.background}`}>
            <div>
                <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
            </div>
            <div className="p-1">
                <h4>{info.title}</h4>
                <h3>{info.price}</h3>
                <h6>{info.description}</h6>
            </div>
            </div>
        </div>
    );
};

export default InfoCard;