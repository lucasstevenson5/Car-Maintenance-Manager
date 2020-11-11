import React, { Component } from 'react';

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
        return (
            <div>
                <h1>Edit Car Form</h1>
                {this.props.userProf != null && 
                    <img src={this.state.image} alt="picture of your car" className="h-48" />
                }
                
                {/* {this.props.error && <div>{this.props.error}</div>} */}
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
                    {/* <input 
                        type="hidden"
                        value={this.props.userProf.id}
                        onChange={this.updateForm}
                    /> */}
                    <input type="submit" value="Edit Car"
                        className="border-solid border-2 border-gray-900"
                    />
                </form>
            </div>
        ) 
    }
}

export default CarDetails;