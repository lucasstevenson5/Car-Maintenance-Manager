import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        return (
            <div>
                <h1>Log In Page</h1>
                {this.props.error && <div>{this.props.error}</div>}<br />
                <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
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
                    <input type="submit" value="Login"
                        className="border-solid border-2 border-gray-900"
                    />
                </form>
            </div>
        )
    }
}

export default Login;