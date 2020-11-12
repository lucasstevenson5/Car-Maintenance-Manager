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
            this.setState({
                name: this.props.currentUser.name,
                username: this.props.currentUser.username,
                password: this.props.currentUser.password
            })
        }
    }

    render() {
        return (
            <div className="text-center">
                <br /><form 
                        onSubmit={(e) => this.props.updateProfile(e, this.state)}
                        className="bg-gray-500 p-2 border-solid border-2 border-gray-900 w-3/5 max-w-sm text-center m-auto">
                        Name: <input 
                            className="border-solid border-2 border-gray-900 ml-10 pl-1"
                            type="text"
                            name="name"
                            placeholder="Your name... duh"
                            value={this.state.name}
                            onChange={this.updateForm}
                        /><br /><br />
                        Username: <input 
                            className="border-solid border-2 border-gray-900 ml-3 pl-1"
                            type="text"
                            name="username"
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.updateForm}
                        /><br /><br />
                        Password: <input 
                            className="border-solid border-2 border-gray-900 ml-4 pl-1"
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.updateForm}
                        /><br /><br />
                        <input 
                            type="submit" 
                            value="Edit Profile" 
                            className="border-solid border-2 border-gray-900 hover:text-gray-400 hover:underline"
                        />
                    </form><br /><br />
                    <button onClick={(e) => this.props.deleteProfile(e)}>Delete Your Entire Profile</button>
            </div>
        ) 
    }
}

export default EditProfileInfo;