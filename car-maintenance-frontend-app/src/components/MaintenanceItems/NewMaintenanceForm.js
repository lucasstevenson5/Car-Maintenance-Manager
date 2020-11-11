import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NewMaintenanceForm extends Component {
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

    render() {
        return (
            <div>
                <h1>New Maintenance Item Form</h1>
                <form onSubmit={(e) => this.props.addMaintenanceItem(e, this.props.carId, this.state)}>
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
                    <input type="submit" value="Add Maintenance Item to List"
                        className="border-solid border-2 border-gray-900"
                    />
                </form><br />
                <Link to={"/profile/car/" + this.props.carId + "/maintenance"}>Hide Form</Link><br /><br />
            </div>
        )
    }
}

export default NewMaintenanceForm;