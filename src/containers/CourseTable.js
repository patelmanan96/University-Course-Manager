import React, {Component} from 'react';
import CourseRowTitle from "../components/CoureRowTitle";
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";
import UserService from "../services/UserService";
import NavBar from "../components/NavBar";
import Course from "../models/Course";

class CourseTable extends Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.userService = new UserService();
        let t = this;
        this.state = {
            courses: []
        }
        this.setState(
            {
                courses: []
            }
        )
        this.courseService.findSessionCourses().then(
            courses => {
                console.log(courses)
                this.setState(
                    {
                        courses: courses
                    }
                )
            }
        )
    }

    refreshContent = () => {
        let t = this;
        this.courseService.findSessionCourses().then(
            function (courses) {
                console.log("C TO ADD")
                console.log(courses)
                console.log("NEW")
                t.setState(
                    {
                        courses:courses
                    }
                )
            }
        )
    }

    addNewCourse = (courseToAdd) => {
        let t =this;
        console.log("COURSE TO ADD : : : : : ")
        console.log(courseToAdd)
        console.log(":::::::::")
        let newCourse = new Course(courseToAdd.id,courseToAdd.title,courseToAdd.author,courseToAdd.modules);
        console.log("C OOBJ : :: ::")
        console.log(newCourse)
        console.log("::::::::::")
        this.courseService.createCourseRest(newCourse).then(
            function () {
                t.refreshContent();
            }
        )
    }

    deleteCourse = (courseToDelete) => {
        let t= this;
        this.courseService.deleteCourseRest(courseToDelete).then(
            function () {
                t.refreshContent();
            }
        )
    }

    render() {
        return (
            <div>
                <NavBar addCourse={this.addNewCourse}/>
                <div className="container-fluid">
                    <div className="table">
                        <table className="table">
                            <tbody>
                            <CourseRowTitle/>
                            {
                                this.state.courses.map(course =>
                                    <CourseRow
                                        deleteCourse={this.deleteCourse}
                                        course={course}
                                        key={course.id}/>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseTable;