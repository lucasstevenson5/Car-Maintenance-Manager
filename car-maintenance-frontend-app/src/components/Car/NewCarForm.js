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
        }
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="text-center mt-2">
                <h1>New Car Form</h1>
                {this.props.error && <div>{this.props.error}</div>}
                <form onSubmit={(e) => this.props.addCar(e, this.state)} 
                    className="flex flex-col border-solid border-2 border-gray-900 bg-gray-200 w-3/5 max-w-sm m-auto"
                >
                    <div className="mb-2">
                        <span className="ml-1">Year:</span>
                        <input 
                            className="border-solid border-2 border-gray-900 mt-2 ml-12 px-1"
                            type="text"
                            name="year"
                            placeholder="model year"
                            value={this.state.year}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="mb-2">
                        Make: 
                        <input 
                            className="border-solid border-2 border-gray-900 ml-12 px-1"
                            type="text"
                            name="make"
                            placeholder="car manufacturer"
                            value={this.state.make}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="mb-2">
                        Model: 
                        <input 
                            className="border-solid border-2 border-gray-900 ml-10 px-1"
                            type="text"
                            name="model"
                            placeholder="model of car"
                            value={this.state.model}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="mb-2">
                        Image URL: 
                        <input 
                            className="border-solid border-2 border-gray-900 ml-2 px-1"
                            type="text"
                            name="image"
                            placeholder="url of image of car"
                            value={this.state.image}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Add Car to Garage"
                            className="border-solid border-2 border-gray-900 mb-2 hover:text-gray-600 hover:underline px-2"
                        />
                    </div>
                </form>
                <Link to="/profile/cars" className="hover:text-gray-200 hover:underline">Hide Form</Link>
            </div>
        )
    }
}

export default NewCarForm;