import React, {Component} from 'react'
import UserService from "../services/UserService";
import User from '../models/User'
import {Link} from 'react-router-dom';

class SignUp extends Component {
    constructor() {
        super();
        this.userService = new UserService();
        this.state = {
            failedPassword: false,
            usernameRepeated: false,
            username: '',
            password: '',
            verifyPassword: ''
        }
    }

    usernameModified = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    passwordModified = (event) => {
        this.setState(
            {
                password: event.target.value
            }
        )
    }
    verifyPasswordModified = (event) => {
        this.setState(
            {
                verifyPassword: event.target.value
            }
        )
    }

    checkAndSignUp = () => {
        if (this.state.password !== this.state.verifyPassword) {
            this.setState(
                {
                    failedPassword: true,
                    usernameRepeated:false
                }
            )
        } else {
            let obj = new User(this.state.username, this.state.password, null, null, 'faculty', null, null);
            let queried = this.userService.registerUser(obj);
            console.log(queried)
            let redirect = this.props.history;
            let uService = this.userService;
            let stateLocal = this
            queried.then(function (res) {
                console.log(res)
                if (res.username !== null) {
                    uService.currentUser().then(
                        function (v) {
                            alert(v)
                        }
                    )
                    redirect.push("/table");
                } else {
                    stateLocal.setState(
                        {
                            failedPassword: false,
                            usernameRepeated: true
                        }
                    )
                }
            })
        }
    }

    signUp = () => {
        this.props.history.push("/signUp");
    }

    render() {
        return (
            <div className="container">
                <h1>Sign Up</h1>
                {
                    this.state.failedPassword === true && <div className="alert alert-danger" role="alert">
                        Passwords Don't Match
                    </div>
                }
                {
                    this.state.usernameRepeated === true && <div className="alert alert-danger" role="alert">
                        Username Not Available
                    </div>
                }
                <div className="form-group row">
                    <label htmlFor="username" id="usernameFld" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input onChange={this.usernameModified} className="form-control" placeholder="Username"
                               id="username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input onChange={this.passwordModified} type="password" placeholder="Password" id="passwordFld"
                               className="form-control wbdv-password-fld" id="password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Verify Password </label>
                    <div className="col-sm-10">
                        <input onChange={this.verifyPasswordModified} type="password" placeholder="Verify Password"
                               id="verifyPasswordFld"
                               id="verifyPasswordFld" className="form-control wbdv-password-fld"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button onClick={this.checkAndSignUp} type="submit" id="registerBtn"
                                className="btn btn-primary btn-block">Sign Up
                        </button>
                        <div className="row">
                            <div className="col-6">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="col-6">
                                <Link to="/login" className="float-right">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;