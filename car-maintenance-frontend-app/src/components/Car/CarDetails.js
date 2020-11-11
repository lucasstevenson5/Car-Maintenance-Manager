import React, { Component } from 'react';
import EditCarForm from './EditCarForm';
import MaintenanceContainer from '../MaintenanceItems/MaintenanceContainer';
import MaintenanceDetails from '../MaintenanceItems/MaintenanceDetails';
import EditMaintenanceItem from '../MaintenanceItems/EditMaintenanceItem';

import { rendCar, postMaintenance, updateMaintenance } from '../../services/api_helper';

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

    // editMaintenanceItem = async (e, index, item) => {
    //     e.preventDefault();
    //     const data = await updateMaintenance(index, item);
    //     console.log(data)
    //     this.props.history.push(`/profile/car/${this.props.match.params.carDetails}/maintenanceItem/${index}`)
    //     this.rendSingleCar();
    // }

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
                </nav><br />

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
                    <Route path="/profile/car/:carDetails/maintenanceItem/:maintenanceDetails" 
                        render={ (props) => {
                            return  <MaintenanceDetails
                                        // editMaintenanceItem={this.editMaintenanceItem}
                                        handleVerify={this.props.handleVerify}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                    {/* <Route path="/profile/car/:carDetails/maintenanceItem/:maintenanceDetails/edit" 
                        render={ (props) => {
                            return  <EditMaintenanceItem
                                        handleVerify={this.props.handleVerify}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    /> */}
                </main>
            </div>
        ) 
    }
}

export default CarDetails;