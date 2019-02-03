import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseService from "../services/CourseService"
import CourseEditorNavBar from "./CourseEditorNavBar";
import Forms from "./Forms";

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService()
        const courseId = parseInt(props.match.params.id)
        const course = this.courseService.findCourseById(courseId)
        console.log(course);
        this.state = {
            course: course,
            module: course.modules[0]
        }
    }

    selectModule = module =>
        this.setState({
            module: module
        })

    render() {
        return (
            <div className="container-fluid pt-4">
                <div className="row">
                    <CourseEditorNavBar title={this.state.course.title}/>
                </div>
                <div className="row bg-dark p-3 text-white">
                    <ModuleList
                        selectModule={this.selectModule}
                        modules={this.state.course.modules}/>
                    <div className="col-9 bg-light text-dark">
                        <LessonTabs
                            lessons={this.state.module.lessons}/>
                            <TopicPills/>
                        <Forms/>
                    </div>

                </div>
            </div>


        )
    }
}

export default CourseEditor