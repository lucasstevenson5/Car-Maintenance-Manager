import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class CarDetails extends Component {
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

    componentDidMount = async () => {
        const currentCar = this.props.userProf.Cars.find(car =>
            car.id === parseInt(this.props.match.params.carDetails)
        );
        console.log(currentCar)
        this.setState({
            year: currentCar.year,
            make: currentCar.make,
            model: currentCar.model,
            image: currentCar.image
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Link to={"/profile/car/" + this.props.match.params.carDetails}>Hide Form</Link>
                <form onSubmit={(e) => this.props.editCar(e, parseInt(this.props.match.params.carDetails), this.state)}>
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
                    <input type="submit" value="Edit Car"
                        className="border-solid border-2 border-gray-900"
                    />
                </form><br /><br />
                <button onClick={(e) => this.props.deleteACar(e, parseInt(this.props.match.params.carDetails))}>Delete this car from your garage</button>
            </div>
        ) 
    }
}

export default CarDetails;