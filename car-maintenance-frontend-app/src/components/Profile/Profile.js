import React, { Component } from 'react';
import EditProfileInfo from './EditProfileInfo';
import CarGarageContainer from './CarGarageContainer';

import { Link, Route } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.props.handleVerify();
    }

    render() {
        console.log(this.props)
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
                                        handleEditProfile={this.props.handleEditProfile} 
                                    />
                        }}
                    />
                    <Route path="/profile/cars" 
                        render={ (props) => {
                            return  <CarGarageContainer
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