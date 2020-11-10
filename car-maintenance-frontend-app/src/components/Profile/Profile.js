import React, { Component } from 'react';
import EditProfileInfo from './EditProfileInfo';
import CarGarageContainer from './CarGarageContainer';

import { rendProf, updateProf, deleteProf } from '../../services/api_helper';

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
        await deleteProf();
        this.setState({
            userProf: null
        })
        this.props.handleVerify();
    }

    componentDidMount() {
        this.props.handleVerify();
        this.rendProfile();
    }

    render() {
        console.log(this.state)
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
                                        handleVerify={this.props.handleVerify}
                                        {...this.state}
                                        {...this.props}
                                    />
                        }}
                    />
                </main>
            </div>
        ) 
    }
    
}

export default withRouter(Profile);