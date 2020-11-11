import React, { Component } from 'react';
import EditCarForm from './EditCarForm';
import MaintenanceContainer from '../MaintenanceItems/MaintenanceContainer';

import { rendCar, postMaintenance } from '../../services/api_helper';

import { Link, Route } from 'react-router-dom';


class CarDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userCar: null
        }
    }

    rendSingleCar = async () => {
        const userCar = await rendCar(this.props.match.params.carDetails);
        this.setState({
            userCar: userCar
        })
    }

    addMaintenanceItem = async (e, index, item) => {
        e.preventDefault();
        console.log("in here")
        console.log(index)
        item.carId = parseInt(index);
        console.log(item)
        const data = await postMaintenance(item);
        console.log(data);
    }

    componentDidMount() {
        this.props.handleVerify();
        this.rendSingleCar();
    }

    render() {
        return (
            <div>
                <h1>Car Details</h1>
                {this.state.userCar != null && 
                    <img src={this.state.userCar.image} alt="picture of your car" className="h-48" />
                }
                
                <nav>
                    <Link to={"/profile/car/" + this.props.match.params.carDetails + "/edit"}>Edit Car</Link>
                    <Link to={"/profile/car/" + this.props.match.params.carDetails + "/maintenance"} className="ml-8">View Maintenance List</Link>
                </nav>

                <main>
                    <Route path="/profile/car/:carDetails/edit" 
                        render={ (props) => {
                            return  <EditCarForm
                                        userProf={this.props.userProf}
                                        deleteACar={this.props.deleteACar}
                                        editCar={this.props.editCar}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                    <Route path="/profile/car/:carDetails/maintenance" 
                        render={ (props) => {
                            return  <MaintenanceContainer
                                        addMaintenanceItem={this.addMaintenanceItem}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                </main>
            </div>
        ) 
    }
}

export default CarDetails;