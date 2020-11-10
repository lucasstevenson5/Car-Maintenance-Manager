import React from 'react';
import CarGarage from './CarGarage';
import { Link, Route } from 'react-router-dom';

function CarGarageContainer(props) {
    console.log(props)
    return (
        <div>
            <h3>Your Garage</h3>
            <nav>
                <Link to ="/profile/cars/new">Add a car to your garage</Link>
            </nav>
            <main>
                {/* <Route path="/profile/cars/new" 
                    render={ (props) => {
                        return  <NewCarForm
                                    {...this.props}
                                />
                    }}
                /> */}
                {props.loggedInUser.userCars.map((car, id) => {
                    return  <CarGarage 
                                car={car}
                                key={id}
                            />
                })}
            </main>
            
        </div>
    )
}

export default CarGarageContainer;