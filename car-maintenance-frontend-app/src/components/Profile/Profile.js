import React, { Component } from 'react';
import EditProfileInfo from './EditProfileInfo';
import CarGarageContainer from './CarGarageContainer';

import { rendProf } from '../../services/api_helper';

import { Link, Route } from 'react-router-dom';

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
                                        handleEditProfile={this.props.handleEditProfile} 
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

export default Profile;