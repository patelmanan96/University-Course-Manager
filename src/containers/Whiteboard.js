import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from '../components/CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "./CourseEditor";
import NavBar from "../components/NavBar";
import LoginComponent from "../components/LoginComponent";
import SignUp from "../components/SignUp";
import Profile from "../components/Profile";

class WhiteBoard extends Component {
    constructor() {
        super();
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }
    deleteCourse = course =>
        this.setState({
            courses: this.courseService.deleteCourse(course)
        });
    addCourse = course => {
        console.log("Passed : " + course.title);

        this.setState({
            courses: this.courseService.addCourse(course)
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path='/' exact component={LoginComponent}/>
                        <Route path='/grid' exact render={() =>
                            <div><NavBar
                                addCourse={this.addCourse}
                            />
                                <CourseGrid
                                    addCourse={this.addCourse}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses}/></div>
                        }/>
                        <Route path='/profile' exact component={Profile}/>
                        <Route path='/signUp' exact component={SignUp}/>
                        <Route path="/course/:id"
                               exact
                               component={CourseEditor}/>
                        <Route path='/table'
                               render={() => <div>
                                   <CourseTable courses={this.state.courses}
                                                deleteCourse={this.deleteCourse}
                                                addCourse={this.addCourse}
                                   />
                               </div>}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default WhiteBoard;