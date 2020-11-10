import React, { Component } from 'react';
import CarGarage from './CarGarage';
import { Link, Route } from 'react-router-dom';

class CarGarageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.handleVerify();
    }

    render() {
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