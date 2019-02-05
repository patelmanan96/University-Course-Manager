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
            module: course.modules[0],
            lesson: course.modules[0].lessons[0],
            topic: course.modules[0].lessons[0].topics[0]
        }
    }

    selectModule = module =>
        this.setState({
            module: module,
            lesson: module.lesson
        })

    selectLesson = lesssonCurrent => {
        alert(lesssonCurrent.title);
        this.setState(
            {
                lesson: lesssonCurrent
            }
        )
    }
    deleteLessons = (lessonRec) => {

        /*let something = this.state.module
        let filt = something.lessons.filter(
            mod => mod.id !== lessonRec.id
        )
        this.setState(
            {
                lesson: filt
            }
        )*/
        // DELETING BUT NOT RENDERING
        this.state.module.lessons = this.state.module.lessons.filter(
            mod => mod.title !== lessonRec.title
        )
        this.selectModule(this.state.module);

        /*
                this.state.module.lessons = this.state.module.lessons.filter(
                    mod => mod.id !== lessonRec.id
                )
                this.setState({
                    module: this.state.module.lessons.filter(
                        mod => mod.id !== lessonRec.id
                    )
                    }
                )*/
        console.log(this.state.module);
    }

    editLessons = (lessonTab) => {
        console.log(lessonTab.topics);
        let newName = prompt("ENTER NEW NAME FOR : " + lessonTab.title);
        if (newName !== "" && newName !== null) {
            let xx = this.state.module.lessons.find(mod => mod.title === lessonTab.title);
            let index = this.state.module.lessons.indexOf(xx);
            this.state.module.lessons[index].title = newName;
            this.setState(
                {
                    modules: [
                        ...this.state.module.lessons
                    ]
                }
            )
        }
    }


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
                            lessons={this.state.module.lessons}
                            deleteLessons={this.deleteLessons}
                            editLessons={this.editLessons}
                            selectLesson={this.selectLesson}
                        />
                        {/*
                        <TopicPills topics={this.state.module.lesson.topics}/>
*/}
                        <Forms/>
                    </div>

                </div>
            </div>


        )
    }
}

export default CourseEditor;