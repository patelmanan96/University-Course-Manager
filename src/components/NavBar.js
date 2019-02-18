import React from 'react';
import {browserHistory} from 'react-router';
import {Link} from 'react-router-dom';
import UserService from "../services/UserService";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            course:
                {
                    id: (new Date()).getTime(),
                    title: 'New Course',
                    modules: [{
                        id: (new Date()).getTime(),
                        title: "Module 1",
                        lessons: [{
                            id: (new Date()).getTime(),
                            title: "Lesson 1",
                            topics: [{
                                id: (new Date()).getTime(),
                                title: "Topic 1",
                                widgets: [
                                    {
                                        id: (new Date()).getTime(),
                                        type: "HEADING",
                                        size: 1,
                                        headingText: "The Document Object Model",
                                        toggle: false
                                    }
                                ]
                            }
                            ]
                        }]
                    }]
                }
        }
    }

    titleChange = (param) => {
        var text;
        if (param.target.value === "") {
            text = 'New Course'
        } else {
            text = param.target.value;
        }
        this.setState(
            {
                course:
                    {
                        id: (new Date()).getTime(),
                        title: text,
                        modules: [{
                            id: (new Date()).getTime(),
                            title: "Module 1",
                            lessons: [{
                                id: (new Date()).getTime(),
                                title: "Lesson 1",
                                topics: [{
                                    id: (new Date()).getTime(),
                                    title: "Topic 1",
                                    widgets: [
                                        {
                                            id: (new Date()).getTime(),
                                            type: "HEADING",
                                            size: 1,
                                            headingText: "The Document Object Model",
                                            toggle: false
                                        }
                                    ]
                                }
                                ]
                            }]
                        }]
                    }
            });
    };
    logout = () => {
        this.userService.logoutCurrentUser().then(
            function (val) {
                alert("Log out Successful");
            }
        );
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col-md-1 col-2 p-2 mt-2 bg-primary">
                        <i className="fa p-2 fa-bars float-left fa-lg"></i>
                    </div>
                    <div className="col-md-3 d-none d-sm-block p-2 mt-2 bg-primary">
                        <h4 className="text-white float-sm-left ml-2">Course Manager</h4>
                    </div>
                    <div className="col-md-8 col-10 pt-2  bg-primary">
                        <div className="form-group row">
                            <div className="col-10 col-sm-10">
                                <input onChange={this.titleChange} type="text" className="form-control mt-2"
                                       placeholder="Course Title"/>
                            </div>
                            <div className="col-2 col-sm-2">
                                <button onClick={() => this.props.addCourse(this.state.course)}
                                        className="btn-sm btn btn-outline-dark">
                                    <i className="fa fa-plus float-left fa-2x mt-2"></i>
                                </button>
                                <Link to={"/profile"}>
                                    <button className="btn-sm btn">
                                        <i className="fa fa-2x fa-user"></i>
                                    </button>
                                </Link>
                                <Link to={"/login"}>
                                    <button onClick={this.logout} className="btn-sm btn">
                                        <i className="fa fa-2x fa-sign-out"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;