import React, { Component } from 'react';
import Header from './components/Home/Header';
import Homepage from './components/Home/Homepage';
import Login from './components/Login-Signup/Login';
import Signup from './components/Login-Signup/Signup';
import Profile from './components/Profile/Profile';

import { Route, withRouter } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [{
        name: "Random User",
        username: "username",
        password: "password"
      }],
      loggedIn: false,
      error: "",
      loggedInUser: {}
    }
  }

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    const users = this.state.users;
    const loggedInUser = userInfo
    delete userInfo.passwordConfirm;
    delete userInfo.error;
    
    users.push(userInfo)

    this.setState({
      users: users,
      loggedInUser: loggedInUser,
      loggedIn: true
    })
    this.props.history.push('/profile')
  }

  handleLogin = (e, userInfo) => {
    e.preventDefault();
    const users = this.state.users;
    const filteredUser = users.filter(
      user => {
        return user.username === userInfo.username && user.password === userInfo.password
      }
    )
    if(filteredUser.length > 0) {
      this.setState({
        loggedIn: true,
        loggedInUser: filteredUser[0]
      })
      this.props.history.push('/profile')
    } else {
      this.setState({
        error: "Incorrect Credentials"
      })
    }
  }

  handleEditProfile = (e, userInfo) => {
    e.preventDefault();
    const users = this.state.users;
    let loggedInUser = this.state.loggedInUser;
    for(let i = 0; i < users.length; i++) {
      if(users[i].username === loggedInUser.username && users[i].password === loggedInUser.password) {
        users[i] = userInfo
        loggedInUser = userInfo
      }
    }
    this.setState({
      users: users,
      loggedInUser: loggedInUser
    })
    this.props.history.push('/profile')
  }

  render() {
    console.log(this.state)
    return (
      <div className="App" >
        <Header />
        <main>
          <Route exact path="/"
            render={ (props) => {
              return <Homepage />
            }} 
          />
          <Route path="/login"
            render={ (props) => {
              return  <Login 
                        handleLogin={this.handleLogin}
                        {...this.state}
                      />
            }} 
          />
          <Route path="/signup"
            render={ (props) => {
              return  <Signup
                        handleSignup={this.handleSignup}
                        {...this.state}
                      />
            }} 
          />
          <Route path="/profile"
            render={ (props) => {
              return  <Profile
                        handleEditProfile={this.handleEditProfile}
                        loggedInUser={this.state.loggedInUser}
                        loggedIn={this.state.loggedIn}
                      />
            }} 
          />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
