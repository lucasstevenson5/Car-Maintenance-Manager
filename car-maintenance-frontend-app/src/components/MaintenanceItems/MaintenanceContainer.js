import React, { Component } from 'react';
import MaintenanceList from './MaintenanceList';

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
                    
                </nav>
                <main>
                    {this.props.userCar ?
                        <div>
                            {this.props.userCar.MaintenanceItems.map((item, id) => {
                                return  <MaintenanceList
                                            maintenanceItem={item}
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

export default MaintenanceContainer;