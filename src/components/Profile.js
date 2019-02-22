import React, {Component} from 'react'
import UserService from "../services/UserService";
import User from '../models/User'

class Profile extends Component {
    constructor() {
        super();
        this.userService = new UserService();
        console.log("STATE CALL")
        this.state = {
            saved: false
        }
        let state = this;
        this.userService.currentUser().then(
            function (user) {
                state.setState(
                    {
                        username: user.username,
                        phone: user.phone,
                        email: user.email,
                    }
                )
            }
        )

    }

    phoneModified = (event) => {
        this.setState(
            {
                phone: event.target.value
            }
        )
    }

    emailModified = (event) => {
        this.setState(
            {
                email: event.target.value
            }
        )
    }

    updateProfile = () => {
        this.setState(
            {
                saved: true
            }
        )
    }

    backToCourses = () => {
        this.props.history.push("/table");
    }

    logout = () => {
        this.userService.logoutCurrentUser()
        this.props.history.push("/");

    }

    render() {
        return (
            <div className="container">
                <h1>Profile</h1>
                {
                    this.state.saved === true && <div className="alert alert-success" role="alert">
                        Profile Successfully saved !
                    </div>
                }
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control" id="username" value={this.state.username} readOnly/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">
                        Phone </label>
                    <div className="col-sm-10">
                        <input onChange={this.phoneModified} className="form-control" id="phone"
                               value={this.state.phone}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email </label>
                    <div className="col-sm-10">
                        <input onChange={this.emailModified} type="email" className="form-control" id="email"
                               value={this.state.email}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Role </label>
                    <div className="col-sm-10">
                        <select className="form-control ">
                            <option value="FACULTY">
                                Faculty
                            </option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Date of Birth </label>
                    <div className="col-sm-10">
                        <input type="date" placeholder="dd-mm-yyyy" className="form-control" id="date"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button onClick={this.updateProfile} className="btn btn-success btn-block">Update</button>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button onClick={this.backToCourses} className="btn btn-primary btn-block">Back To Courses</button>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-danger btn-block" onClick={this.logout}>Logout</button>
                    </div>
                </div>
            </div>)
    }
}

export default Profile;