import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class EditMaintenanceItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemDescription: "",
            carMiles: "",
            notes: ""
        }
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = async () => {
        if (this.props.userCarMaintenance != null) {
            this.setState({
                itemDescription: this.props.userCarMaintenance.itemDescription,
                carMiles: this.props.userCarMaintenance.carMiles,
                notes: this.props.userCarMaintenance.notes
            }) 
        }
    }

    render() {
        return (
            <div>
                <h1>Edit Maintenance Item Form</h1>
                <form onSubmit={(e) => this.props.editMaintenanceItem(e, this.props.match.params.maintenanceDetails, this.state)}>
                    Item Description: <input className="border-solid border-2 border-gray-900"
                        type="text"
                        name="itemDescription"
                        placeholder="What was done?"
                        value={this.state.itemDescription}
                        onChange={this.updateForm}
                    />
                    Mileage: <input className="border-solid border-2 border-gray-900"
                        type="text"
                        name="carMiles"
                        placeholder="How many miles on the car?"
                        value={this.state.carMiles}
                        onChange={this.updateForm}
                    />
                    Notes: <input className="border-solid border-2 border-gray-900"
                        type="text"
                        name="notes"
                        placeholder="Any notes? Who did the work?"
                        value={this.state.notes}
                        onChange={this.updateForm}
                    />
                    <input type="submit" value="Edit Maintenance Item"
                        className="border-solid border-2 border-gray-900"
                    />
                </form><br />
                <button onClick={(e) => this.props.deleteMaintenanceItem(e, parseInt(this.props.match.params.maintenanceDetails))}>
                    Delete this Maintenance Item
                </button><br /><br />
                <Link to={"/profile/car/" + this.props.carId + "/maintenanceItem/" + this.props.match.params.maintenanceDetails}>
                    Hide Form
                </Link><br /><br />
                
            </div>
        )
    }
}

export default EditMaintenanceItem;