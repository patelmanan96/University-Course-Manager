import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseService from "../services/CourseService"
import CourseEditorNavBar from "../components/CourseEditorNavBar";
import Forms from "../components/Forms";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import WidgetReducer from '../reducers/WidgetReducer';
import WidgetListContainer from './WidgetListContainer'

/*
const store = createStore(WidgetReducer)
*/

const courseService= CourseService.getInstance();

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService()
        const courseId = parseInt(props.match.params.id)
        const course = this.courseService.findCourseById(courseId)
        if (course.modules[0] === undefined) {
            this.state = {
                course: course
            }
        } else if (course.modules[0].lessons[0] === undefined) {
            this.state = {
                course: course,
                module: course.modules[0]
            }
        } else if (course.modules[0].lessons[0].topics[0] === undefined) {
            this.state = {
                course: course,
                module: course.modules[0],
                lessons: course.modules[0].lessons,
                lesson: course.modules[0].lessons[0],
            }
        } else {
            this.state = {
                course: course,
                module: course.modules[0],
                lesson: course.modules[0].lessons[0],
                lessons: course.modules[0].lessons,
                topic: course.modules[0].lessons[0].topics[0],
                topicsS: course.modules[0].lessons[0].topics,
                widgets:course.modules[0].lessons[0].topics[0].widgets
            }
        }
        console.log(this.state.widgets)
    }

    selectModule = module => {
        if (module.lessons[0] !== undefined) {
            this.setState({
                module: module,
                lesson: module.lessons[0],
                lessons: module.lessons,
                topic: module.lessons[0].topics[0],
                topicsS: module.lessons[0].topics,
                widgets:module.lessons[0].topics[0].widgets
            })
        } else {
            this.setState({
                module: module
            })
        }
    }
    selectLesson = lesssonCurrent => {
        this.setState(
            {
                lesson: lesssonCurrent,
                topicsS: this.state.lesson.topics
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

    editTopics = (topicTab) => {
        let newName = prompt("ENTER NEW NAME FOR : " + topicTab.title);
        if (newName !== "" && newName !== null) {
            let xx = this.state.lesson.topics.find(mod => mod.title === topicTab.title);
            let index = this.state.lesson.topics.indexOf(xx);
            this.state.lesson.topics[index].title = newName;
            this.setState(
                {
                    modules: [
                        ...this.state.lesson.topics
                    ]
                }
            )
        }
    }

    deleteTopic = (topicTab) => {
        this.state.lesson.topics = this.state.lesson.topics.filter(
            mod => mod.title !== topicTab.title
        )
        this.selectLesson(this.state.lesson);
    }

    activateLessonTab = (currentLesson) => {
        if (currentLesson.id === this.state.lesson.id) {
            return true;
        }
        return false;
    }


    createTopic = (topicPassed) => {
        console.log(topicPassed)
        this.setState({
                topicsS: [this.state.lesson.topics.push(topicPassed)]
            }
        )
    }

    activeModule = (module) => {
        if (module.id === this.state.module.id){
            return true;
        }
        else{
            return false;
        }
    }
    activeTopic = (topicPassed) => {
        if (topicPassed.id === this.state.topic.id){
            return true;
        }
        else{
            return false;
        }
    }

    selectTopic = (topicSelected) => {
       let widgets = topicSelected.widgets
        this.setState(
            {
                topic:topicSelected,
                widgets: widgets
            }
        )
    }




    render() {

        console.log("BEFOORE SENDING : "+this.state.widgets.length)
        let x = this.state.widgets


        console.log(x)
        console.log("X len : "+x.length)

        const cStore = createStore(WidgetReducer);

        cStore.dispatch(
            {type: "LOAD", widgets: this.state.widgets,
            courseService : this.courseService,
                topicId: this.state.topicId}
            )
        return (
            <div className="container-fluid pt-4 mt-4">
                <div className="row">
                    <CourseEditorNavBar title={this.state.course.title}/>
                </div>
                <div className="row bg-dark p-3 text-white">
                    <ModuleList
                        moduleClass={"nav-link btn-outline-primary"}
                        selectModule={this.selectModule}
                        modules={this.state.course.modules}
                        activeModule={this.activeModule}
                    />
                    <div className="col-9 bg-light text-dark">
                        <LessonTabs
                            lessons={this.state.module.lessons}
                            activateLessonTab={this.activateLessonTab}
                            deleteLessons={this.deleteLessons}
                            editLessons={this.editLessons}
                            selectLesson={this.selectLesson}
                            addLesson={this.addLesson}
                        />
                        {
                            <TopicPills topics={this.state.lesson.topics}
                                        editTopics={this.editTopics}
                                        deleteTopic={this.deleteTopic}
                                        createTopic={this.createTopic}
                                        activeTopic={this.activeTopic}
                                        selectTopic={this.selectTopic}
                            />
                        }

                        <Provider store={cStore}>
                            <WidgetListContainer widgets={this.state.widgets} />
                        </Provider>
                    </div>

                </div>
            </div>


        )
    }
}

export default CourseEditor;