import React from 'react'
import CourseCard from './CourseCard'
import GridTableSwitch from "./GridTableSwitch";
import CourseService from "../services/CourseService";
import UserService from "../services/UserService";

class CourseGrid extends React.Component{
    constructor(){
        super();
        this.courseService = new CourseService();
        this.state = {
            courses:[]
        }
        this.setState(
            {
                courses:[]
            }
        )
        this.courseService.findSessionCourses().then(
            courses =>{
                console.log(courses)
                this.setState(
                    {
                        courses:courses
                    }
                )
            }
        )
    }

    render() {
        return (
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4"><GridTableSwitch whatSwitch="/table"/></div>
                </div>
                <div className=" card-deck ">
                    {
                        this.state.courses.map(course =>
                            <CourseCard
                                course={course}
                                key={course.id}/>
                        )
                    }
                </div>
            </div>
        );
    }
}
/*
const CourseGrid = ({courses, deleteCourse, addCourse}) =>
    ;
*/
export default CourseGrid;