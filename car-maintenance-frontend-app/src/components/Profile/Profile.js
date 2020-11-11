import React, { Component } from 'react';
import EditProfileInfo from './EditProfileInfo';
import CarGarageContainer from './CarGarageContainer';
import CarDetails from '../Car/CarDetails';

import { rendProf, updateProf, deleteProf, postCar, updateCar, deleteCar } from '../../services/api_helper';

import { Link, Route, withRouter } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userProf: null
        }
    }

    rendProfile = async () => {
        const userProf = await rendProf();
        this.setState({
            userProf: userProf
        })
    }

    updateProfile = async (e, registerData) => {
        e.preventDefault();
        let userProf = await updateProf(registerData);
        console.log(userProf);
        this.setState({
            userProf: userProf
        })
    }

    deleteProfile = async (e) => {
        e.preventDefault();
        const userResp = prompt("Are you sure you want to delete your profile? This cannot be undone. [y] for yes, any key for no");
        if (userResp === "Y" || userResp == "y") {
            await deleteProf();
            this.setState({
                userProf: null
            })
            this.props.handleVerify();
        }
    }

    addCar = async (e, car) => {
        e.preventDefault();
        const userProf = this.state.userProf;
        const data = await postCar(car);
        console.log(data);
        userProf.Cars.push(data);
        console.log(userProf);
        this.setState({
            userProf: userProf
        })
        this.props.history.push("/profile/cars")
    }

    editCar = async (e, id, car) => {
        e.preventDefault();
        const data = await updateCar(id, car);
        this.props.history.push("/profile/cars")
        this.rendProfile();
    }

    deleteACar = async (e, id) => {
        e.preventDefault();
        const userResp = prompt("Are you sure you want to delete your profile? This cannot be undone. [y] for yes, any key for no");
        if (userResp === "Y" || userResp == "y") {
            await deleteCar(id);
            this.props.history.push("/profile/cars")
            this.rendProfile();
        }
    }

    componentDidMount() {
        this.props.handleVerify();
        this.rendProfile();
    }

    render() {
        return (
            <div>
                {this.props.currentUser ? 
                <h1>Welcome {this.props.currentUser.name}</h1>
                :
                <h1>Welcome</h1>
                }
                <nav>
                    <Link to="/profile/edit">Edit Profile Info</Link>
                    <Link to="/profile/cars" className="ml-8">Your Garage</Link>
                </nav>
                <main>

                    <Route path="/profile/edit" 
                        render={ (props) => {
                            return  <EditProfileInfo
                                        {...this.props}
                                        {...this.state} 
                                        updateProfile={this.updateProfile} 
                                        deleteProfile={this.deleteProfile}
                                        handleVerify={this.props.handleVerify}
                                    />
                        }}
                    />
                    <Route path="/profile/cars" 
                        render={ (props) => {
                            return  <CarGarageContainer
                                        addCar={this.addCar}
                                        handleVerify={this.props.handleVerify}
                                        {...this.state}
                                        {...this.props}
                                    />
                        }}
                    />
                    <Route path="/profile/car/:carDetails" 
                        render={ (props) => {
                            return  <CarDetails
                                        handleVerify={this.props.handleVerify}
                                        deleteACar={this.deleteACar}
                                        editCar={this.editCar}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                </main>
            </div>
        ) 
    }
    
}

export default withRouter(Profile);