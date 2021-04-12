import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: "Opening Hours",
        description: "Lorem ipsum dolor sit amet",
        icon: faClock,
        background : "primary"
    },
    {
        title: "Visit our location",
        description: "New York, United State",
        icon: faMapMarkerAlt,
        background : "dark"
    },
    {
        title: "Contact us now",
        description: "+1457656868",
        icon: faPhoneAlt,
        background : "primary"
    }
]

const BusinessInfo = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infosData?.map( info => <InfoCard info={info}/>)
            }
            </div>
        </div>
    );
};

export default BusinessInfo;