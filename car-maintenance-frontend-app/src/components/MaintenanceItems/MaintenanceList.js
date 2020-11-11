import React from 'react';

import { Link } from 'react-router-dom';

function MaintenanceList(props) {
    console.log(props)
    return (
        <div>
            Type of Maintenance: {props.maintenanceItem.itemDescription}<br />
            Miles on Car: {props.maintenanceItem.carMiles}<br />
            Notes: {props.maintenanceItem.notes}<br />
            <Link to={"/profile/car/" + props.carId + "/maintenanceItem/" + props.maintenanceItem.id}>
                    View Details
            </Link><br /><br />
        </div>
    )
}

export default MaintenanceList;