import React, { Component } from 'react';

class EditProfileInfo extends Component {
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

    componentDidMount = async () => {
        await this.props.handleVerify();
        if (this.props.currentUser != null) {
            const name = this.props.currentUser.name;
            this.setState({
                name,
                username: this.props.currentUser.username,
                password: this.props.currentUser.password
            })
        }
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

export default EditProfileInfo;