import React, { Component } from 'react';
import EditCarForm from './EditCarForm';

import { Link, Route } from 'react-router-dom';

class CarDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // year: 0,
            // make: "",
            // model: "",
            // image: ""
        }
    }

    // updateForm = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // componentDidMount = async () => {
    //     const currentCar = this.props.userProf.Cars.find(car =>
    //         car.id === parseInt(this.props.match.params.carDetails)
    //     );
    //     console.log(currentCar)
    //     this.setState({
    //         year: currentCar.year,
    //         make: currentCar.make,
    //         model: currentCar.model,
    //         image: currentCar.image
    //     })
    // }

    render() {
        console.log(this.props)
        const currentCar = this.props.userProf.Cars.find(car =>
            car.id === parseInt(this.props.match.params.carDetails)
        );
        return (
            <div>
                <h1>Car Details</h1>
                {this.props.userProf != null && 
                    <img src={currentCar.image} alt="picture of your car" className="h-48" />
                }
                
                <nav>
                    <Link to={"/profile/car/" + this.props.match.params.carDetails + "/edit"}>Edit Car</Link>
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
                </main>

                {/* {this.props.error && <div>{this.props.error}</div>} */}
                {/* <form onSubmit={(e) => this.props.editCar(e, parseInt(this.props.match.params.carDetails), this.state)}>
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
                <button onClick={(e) => this.props.deleteACar(e, parseInt(this.props.match.params.carDetails))}>Delete this car from your garage</button> */}
            </div>
        ) 
    }
}

export default CarDetails;