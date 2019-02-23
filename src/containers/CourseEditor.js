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
import ModuleService from "../services/ModuleService";
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";

/*
const store = createStore(WidgetReducer)
*/

const courseService = CourseService.getInstance();
const cStore = createStore(WidgetReducer);

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.moduleService = new ModuleService();
        this.lessonService = new LessonService();
        this.topicService = new TopicService();
        this.courseId = parseInt(props.match.params.id)
        let t = this;
        this.state = {
            course: '',
            module: '',
            modules: [],
            lesson: '',
            lessons: [],
            topic: '',
            topicsS: [],
            widgets: []
        }


    }

    componentDidMount() {
        let t = this;
        this.courseService.findCourseByIdRest(parseInt(this.courseId)).then(
            function (course) {
                console.log("OBJECT RECIEVED : ")
                console.log(course)
                console.log("MODULES : ")
                console.log(course.modules)

                t.setState(
                    {
                        course: course,
                        module: course.modules[0],
                        modules:course.modules,
                        lesson: course.modules[0].lessons[0],
                        lessons: course.modules[0].lessons,
                    }
                )
                if(t.state.lesson !== undefined && t.state.lesson.topics !== undefined)
                {
                    t.setState(
                        {
                            topic: course.modules[0].lessons[0].topics[0],
                            topicsS: course.modules[0].lessons[0].topics,
                        }
                    )
                }
            }
        )
    }

    refreshContent = () => {
        let t = this;
        this.courseService.findCourseByIdRest(parseInt(this.courseId)).then(
            function (course) {
                console.log("OBJECT RECIEVED : ")
                console.log(course)
                console.log("MODULES : ")
                console.log(course.modules)

                t.setState(
                    {
                        course: course,
                        module: course.modules[0],
                        modules:course.modules,
                        lesson: course.modules[0].lessons[0],
                        lessons: course.modules[0].lessons,
                        topic : [],
                        topicsS:[]
                    }
                )
                if(t.state.lesson !== undefined && t.state.lesson.topics !== undefined)
                {
                    t.setState(
                        {
                            topic: course.modules[0].lessons[0].topics[0],
                            topicsS: course.modules[0].lessons[0].topics,
                        }
                    )
                }
            }
        )
    }

    selectModule = module => {
        if (module.lessons[0] !== undefined) {
            this.setState({
                module: module,
                lesson: module.lessons[0],
                lessons: module.lessons,
                topic: module.lessons[0].topics[0],
                topicsS: module.lessons[0].topics,
                widgets: []
            })
        } else {
            this.setState({
                module: module,
                lessons:[],
                topicsS:[]
            })
        }
    }
    selectLesson = lesssonCurrent => {
        this.setState(
            {
                lesson: lesssonCurrent
            }
        )
        this.setState(
            {
                topicsS: lesssonCurrent.topics,
                topic:lesssonCurrent.topics[0]
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
        let module  = this.state.module;
        let t = this;
        this.lessonService.deleteLessonREST(lessonRec).then(
            function (val) {
                t.refreshContent();
                t.selectModule(module)
            }
        )
        /*

        this.state.module.lessons = this.state.module.lessons.filter(
            mod => mod.title !== lessonRec.title
        )

        this.selectModule(this.state.module);
*/
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
            lessonTab.title = newName;
            let t = this;
            this.lessonService.editLessonREST(lessonTab).then(
                function (val) {
                    t.refreshContent();
                }
            )
            /*let xx = this.state.module.lessons.find(mod => mod.title === lessonTab.title);
            let index = this.state.module.lessons.indexOf(xx);
            this.state.module.lessons[index].title = newName;
            this.setState(
                {
                    modules: [
                        ...this.state.module.lessons
                    ]
                }
            )*/
        }
    }

    editTopics = (topicTab) => {
        let newName = prompt("ENTER NEW NAME FOR : " + topicTab.title);
        if (newName !== "" && newName !== null) {
            topicTab.title = newName;
            let t= this;
            this.topicService.updateTopic(topicTab).then(
                function () {
                    t.refreshContent();
                }
            )

            /*
            let xx = this.state.lesson.topics.find(mod => mod.title === topicTab.title);
            let index = this.state.lesson.topics.indexOf(xx);
            this.state.lesson.topics[index].title = newName;
            this.setState(
                {
                    modules: [
                        ...this.state.lesson.topics
                    ]
                }
            )*/
        }
    }

    deleteTopic = (topicTab) => {
        let t = this;
        this.topicService.deleteTopicREST(topicTab).then(
            function (val) {
                t.refreshContent();
            }
        )
/*
        this.state.lesson.topics = this.state.lesson.topics.filter(
            mod => mod.title !== topicTab.title
        )*/
        this.selectLesson(this.state.lesson);
    }

    activateLessonTab = (currentLesson) => {
        if (currentLesson.id === this.state.lesson.id) {
            return true;
        }
        return false;
    }


    createTopic = (topicPassed) => {
        let t = this;
        this.topicService.addTopicREST(this.state.lesson.id,topicPassed).then(
            function (val) {
                t.refreshContent();
                t.selectTopic(topicPassed);
            }
        )

        console.log(topicPassed)
        this.setState({
                topicsS: [this.state.lesson.topics.push(topicPassed)]
            }
        )
    }

    activeModule = (module) => {
        if (module.id === this.state.module.id) {
            return true;
        } else {
            return false;
        }
    }
    activeTopic = (topicPassed) => {
        if (topicPassed.id === this.state.topic.id) {
            return true;
        } else {
            return false;
        }
    }

    selectTopic = (topicSelected) => {
/*
        let widgets = topicSelected.widgets
*/
        this.setState(
            {
                topic: topicSelected,
                widgets: []
            }
        )
    }

    addLesson = (lessonToAdd) => {
        console.log( " L TO ADD : ")
        console.log(lessonToAdd)
        let t = this;
        this.lessonService.addLessonToModuleREST(this.state.module.id,lessonToAdd).then(
            function () {
                t.refreshContent();
                t.selectModule(t.state.module)
            }
        )

        /*this.setState({
                lessons: [this.state.module.lessons.push(lessonToAdd)]
            }
        )*/
        /*this.setState(
            {
                lessons: [
                    ...this.state.module.lessons,
                    lessonToAdd.lesson
                ]
            }
        )*/
        console.log(this.state.lessons)
    }


    render() {


        cStore.dispatch(
            {
                type: "LOAD", widgets: this.state.widgets,
                courseService: this.courseService,
                topicId: this.state.topicId
            }
        )

        // load state using course Service
        // save using course Service
        return (

            <div className="container-fluid pt-4 mt-4">
                <div className="row">
                    <CourseEditorNavBar title={this.state.course.title}/>
                </div>
                <div className="row bg-dark p-3 text-white">
                    <ModuleList
                        moduleClass={"nav-link btn-outline-primary"}
                        selectModule={this.selectModule}
                        modules={this.state.modules}
                        activeModule={this.activeModule}
                        courseId = {this.courseId}
                        refreshContent = {this.refreshContent}
                    />
                    <div className="col-9 bg-light text-dark">
                        <LessonTabs
                            moduleId = {this.state.module.id}
                            lessons={this.state.lessons}
                            activateLessonTab={this.activateLessonTab}
                            deleteLessons={this.deleteLessons}
                            editLessons={this.editLessons}
                            selectLesson={this.selectLesson}
                            addLesson={this.addLesson}
                        />
                        {
                            <TopicPills topics={this.state.topicsS}
                                        editTopics={this.editTopics}
                                        deleteTopic={this.deleteTopic}
                                        createTopic={this.createTopic}
                                        activeTopic={this.activeTopic}
                                        selectTopic={this.selectTopic}
                            />
                        }
                        <Provider store={cStore}>
                            <WidgetListContainer widgets={this.state.widgets}
                            />
                        </Provider>
                    </div>

                </div>
            </div>
        )
    }
}

export default CourseEditor;