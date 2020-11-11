import React, { Component } from 'react';
import MaintenanceList from './MaintenanceList';
import NewMaintenanceForm from '../MaintenanceItems/NewMaintenanceForm';

import { Link, Route } from 'react-router-dom';

class MaintenanceContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.userCar &&
                    <h3>Your {this.props.userCar.make} {this.props.userCar.model}'s Maintenance Items</h3>
                }<br />
                <nav>
                    <Link to ={"/profile/car/" + this.props.carId + "/maintenance/new"}>Add Maintenance Item</Link>
                </nav><br />
                <main>
                    <Route path="/profile/car/:carDetails/maintenance/new" 
                        render={ (props) => {
                            return  <NewMaintenanceForm
                                        addMaintenanceItem={this.props.addMaintenanceItem}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                    {this.props.userCar ?
                        <div>
                            {this.props.userCar.MaintenanceItems.map((item, id) => {
                                return  <MaintenanceList
                                            maintenanceItem={item}
                                            key={id}
                                            carId={this.props.carId}
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

export default MaintenanceContainer;