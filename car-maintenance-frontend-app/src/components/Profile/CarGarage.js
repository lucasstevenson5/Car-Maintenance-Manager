import React from 'react';

function CarGarage(props) {
    return (
        <div>
            <br /><h4>{props.car.year} {props.car.make} {props.car.model}</h4>
            <img src={props.car.image} alt="picture of your car" className="h-48" />
        </div>
    )
}

export default CarGarage;