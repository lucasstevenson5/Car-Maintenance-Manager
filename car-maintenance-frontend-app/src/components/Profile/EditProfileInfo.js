import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.loggedInUser.name,
            username: this.props.loggedInUser.username,
            password: this.props.loggedInUser.password
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
                <br /><form onSubmit={(e) => this.props.handleEditProfile(e, this.state)}>
                        Name: <input className="border-solid border-2 border-gray-900"
                            type="text"
                            name="name"
                            placeholder="Your name... duh"
                            value={this.state.name}
                            onChange={this.updateForm}
                        /><br /><br />
                        Username: <input className="border-solid border-2 border-gray-900"
                            type="text"
                            name="username"
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.updateForm}
                        /><br /><br />
                        Password: <input className="border-solid border-2 border-gray-900"
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.updateForm}
                        /><br /><br />
                        <input type="submit" value="Edit Profile" />
                    </form><br /><br />
                    <button onClick={(e) => this.props.deleteProfile(e)}>Delete Your Entire Profile</button>
            </div>
        ) 
    }
}

export default Profile;