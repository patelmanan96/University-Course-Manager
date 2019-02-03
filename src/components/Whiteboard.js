import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from '../containers/CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "./CourseEditor";
import NavBar from "./NavBar";

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
        console.log(course);
        this.setState({
            courses: this.courseService.addCourse(course)
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/">Course Grid</Link>
                        <Link to="/table">Course Table</Link>
                        <Route path='/' exact render={() =>
                            <div><NavBar addCourse={this.addCourse}/>
                                <CourseGrid
                                    addCourse={this.addCourse}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses}/></div>
                        }/>
                        <Route path="/course/:id"
                               exact
                               component={CourseEditor}/>
                        <Route path='/table'
                               render={() => <div>
                                   <NavBar addCourse={this.addCourse}/>
                                   <CourseTable courses={this.state.courses}
                                                deleteCourse={this.deleteCourse}
                                                addCourse={this.addCourse}
                                   />
                               </div>
                               }/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default WhiteBoard;