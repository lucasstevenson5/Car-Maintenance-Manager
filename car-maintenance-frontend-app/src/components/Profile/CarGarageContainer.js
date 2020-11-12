import React, { Component } from 'react';
import CarGarage from '../Car/CarGarage';
import NewCarForm from '../Car/NewCarForm';
import CarDetails from '../Car/CarDetails';

import { Link, Route } from 'react-router-dom';

class CarGarageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        await this.props.handleVerify();
    }

    render() {
        return (
            <div className="bg-gray-500">
                <h3 className="text-center">Your Garage</h3><br />
                <nav className="text-center">
                    <Link to="/profile/cars/new" className="text-center hover:text-gray-200 hover:underline">Add a car to your garage</Link>
                </nav>
                <main>
                    <Route exact path="/profile/cars/new" 
                        render={ (props) => {
                            return  <NewCarForm
                                        addCar={this.props.addCar}
                                        {...props}
                                    />
                        }}
                    />
                    {/* <Route exact path="/profile/cars/:carDetails" 
                        render={ (props) => {
                            return  <CarDetails
                                        {...props}
                                    />
                        }}
                    /> */}
                    {this.props.userProf ?
                        <div>
                            {this.props.userProf.Cars.map((car, id) => {
                                return  <CarGarage 
                                            handleVerify={this.props.handleVerify}
                                            car={car}
                                            key={id}
                                        />
                            })}
                        </div>
                    :
                        <div></div>
                    }
                    
                </main>
                
            </div>
        )
    }
    
}

export default CarGarageContainer;