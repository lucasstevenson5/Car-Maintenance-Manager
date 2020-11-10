import React from 'react';
import CarGarage from './CarGarage';

function CarGarageContainer(props) {
    console.log(props)
    return (
        <div>
            <h3>Your Garage</h3>
            {props.loggedInUser.userCars.map((car, id) => {
                return  <CarGarage 
                            car={car}
                            key={id}
                        />
            })}
        </div>
    )
}

export default CarGarageContainer;