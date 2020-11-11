import React from 'react';



function MaintenanceList(props) {
    return (
        <div>
            Type of Maintenance: {props.maintenanceItem.itemDescription}<br />
            Miles on Car: {props.maintenanceItem.carMiles}<br />
            Notes: {props.maintenanceItem.notes}<br /><br />
        </div>
    )
}

export default MaintenanceList;