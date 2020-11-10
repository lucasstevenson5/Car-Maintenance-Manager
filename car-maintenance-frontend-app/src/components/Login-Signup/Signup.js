import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: "",
            password: "",
            passwordConfirm: "",
            error: ""
        }
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // checkPasswordMatch = () => {
    //     if(this.state.password != this.state.passwordConfirm) {
    //         this.setState({
    //             error: "Passwords Do Not Match"
    //         })
    //     } else {
    //         this.setState({
    //             error: ""
    //         })
    //     }
    // }

    render() {
        return (
            <div>
                <h1>Sign Up Page</h1>
                {this.state.error && <div>{this.state.error}</div>}<br />
                <form onSubmit={(e) => this.props.handleSignup(e, this.state)}>
                    Full Name: <input className="border-solid border-2 border-gray-900"
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
                    {/* <input
                        type="password"
                        name="passwordConfirm"
                        placeholder="confirm password"
                        value={this.state.passwordConfirm}
                        onChange={this.updateForm}
                    /> */}
                    <input type="submit" value="Create Profile" />
                </form>
            </div>
        )
    }
}

export default Signup;