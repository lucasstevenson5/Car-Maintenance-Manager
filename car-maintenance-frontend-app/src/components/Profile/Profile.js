import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: "",
            password: ""
        }
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Welcome {this.props.loggedInUser.name}</h1>
                <form onSubmit={(e) => this.props.handleEditProfile(e, this.state)}>
                        <input className="border-solid border-2 border-gray-900"
                            type="text"
                            name="name"
                            placeholder="Your name... duh"
                            value={this.state.name}
                            onChange={this.updateForm}
                        />
                        <input className="border-solid border-2 border-gray-900"
                            type="text"
                            name="username"
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.updateForm}
                        />
                        <input className="border-solid border-2 border-gray-900"
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.updateForm}
                        />
                        <input type="submit" value="Edit Profile" />
                    </form>
            </div>
        ) 
    }
    
}

export default Profile;