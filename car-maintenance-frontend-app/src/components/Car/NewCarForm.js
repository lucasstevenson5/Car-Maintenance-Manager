import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NewCarForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: 0,
            make: "",
            model: "",
            image: ""
            // userId: 0
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
                <h1>New Car Form</h1>
                {this.props.error && <div>{this.props.error}</div>}
                <form onSubmit={(e) => this.props.addCar(e, this.state)}>
                    Year: <input className="border-solid border-2 border-gray-900"
                        type="text"
                        name="year"
                        placeholder="model year"
                        value={this.state.year}
                        onChange={this.updateForm}
                    />
                    Make: <input className="border-solid border-2 border-gray-900"
                        type="text"
                        name="make"
                        placeholder="car manufacturer"
                        value={this.state.make}
                        onChange={this.updateForm}
                    />
                    Model: <input className="border-solid border-2 border-gray-900"
                        type="text"
                        name="model"
                        placeholder="model of car"
                        value={this.state.model}
                        onChange={this.updateForm}
                    />
                    Image URL: <input className="border-solid border-2 border-gray-900"
                        type="text"
                        name="image"
                        placeholder="url of image of car"
                        value={this.state.image}
                        onChange={this.updateForm}
                    />
                    {/* <input 
                        type="hidden"
                        value={this.props.userProf.id}
                        onChange={this.updateForm}
                    /> */}
                    <input type="submit" value="Add Car to Garage"
                        className="border-solid border-2 border-gray-900"
                    />
                </form>
                <Link to="/profile/cars">Hide Form</Link>
            </div>
        )
    }
}

export default NewCarForm;