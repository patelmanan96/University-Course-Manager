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
import WidgetService from "../services/WidgetService";

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
        this.widgetService = new WidgetService();
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
        cStore.dispatch(
            {
                type: "LOAD",
                widgets: [],
                courseService: this.courseService,
                topicId: ''
            }
        )

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
                    }
                )
                if (course.modules[0] !== undefined) {
                    t.setState(
                        {
                            modules: course.modules,
                            module: course.modules[0]
                        }
                    )
                    if (course.modules[0].lessons[0] !== undefined) {
                        t.setState(
                            {
                                lessons: course.modules[0].lessons,
                                lesson: course.modules[0].lessons[0]
                            }
                        )
                        if (course.modules[0].lessons[0].topics[0] !== undefined) {
                            t.setState(
                                {
                                    topicsS: course.modules[0].lessons[0].topics,
                                    topic: course.modules[0].lessons[0].topics[0]
                                }
                            )
                            if (course.modules[0].lessons[0].topics[0].widgets[0] !== undefined) {
                                t.setState(
                                    {
                                        widgets: course.modules[0].lessons[0].topics[0].widgets,
                                    }
                                )
                                cStore.dispatch(
                                    {
                                        type: "LOAD",
                                        widgets: [],
                                    }
                                )
                            }
                        }
                    }
                }
            }
        )
    }

    refreshContent = () => {
        let t = this;
        this.courseService.findCourseByIdRest(parseInt(this.courseId)).then(
            function (course) {
                t.setState(
                    {
                        course: course,
                    }
                )
                if (course.modules[0] !== undefined) {
                    t.setState(
                        {
                            modules: course.modules,
                            module: course.modules[0]
                        }
                    )
                    if (course.modules[0].lessons[0] !== undefined) {
                        t.setState(
                            {
                                lessons: course.modules[0].lessons,
                                lesson: course.modules[0].lessons[0]
                            }
                        )
                        if (course.modules[0].lessons[0].topics[0] !== undefined) {
                            t.setState(
                                {
                                    topicsS: course.modules[0].lessons[0].topics,
                                    topic: course.modules[0].lessons[0].topics[0]
                                }
                            )
                        }
                    }
                }
            }
        )
    }

    refreshTopic = () => {
        let t = this;
        this.courseService.findCourseByIdRest(parseInt(this.courseId)).then(
            function (course) {

                t.setState(
                    {
                        topicsS: course.modules[0].lessons[0].topics,
                        topic: course.modules[0].lessons[0].topics[0]
                    }
                )
            }
        )

    }
    selectModule = module => {
        if (module.lessons[0] !== undefined) {
            this.setState({
                module: module,
                lessons: module.lessons,
            })
            this.selectLesson(module.lessons[0])
        } else {
            this.setState({
                module: module,
                lessons: [],
                topicsS: []
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
            })
        if (lesssonCurrent.topics[0] !== undefined) {
            this.selectTopic(lesssonCurrent.topics[0])
        } else {
            this.setState(
                {
                    widgets: []
                }
            )
        }
        /*if (lesssonCurrent.topics[0] !== undefined) {

        }
            if (lesssonCurrent.topics[0].widgets !== undefined) {
                this.setState(
                    {
                        widgets: lesssonCurrent.topics[0].widgets
                    }
                )
            } else {
                this.setState({
                    widgets:[]
                })
            }
        }
*/
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
        let module = this.state.module;
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
            let t = this;
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
        this.topicService.addTopicREST(this.state.lesson.id, topicPassed).then(
            function (val) {
                t.refreshContent();
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

        if (this.state.topic !== undefined && topicPassed.id === this.state.topic.id) {
            return true;
        } else {
            return false;
        }
    }

    selectTopic = (topicSelected) => {
        /*
                let widgets = topicSelected.widgets
        */
        let t = this;
        t.setState(
            {
                widgets:[]
            }
        )
        cStore.dispatch(
            {
                type: "LOAD",
                widgets: [],
            }
        )
        this.widgetService.loadWidgetsForTopic(topicSelected.id).then(
            function (val){
                console.log("NEXT LOAD :: :: :: : :")
                console.log(val)
                console.log("END LOAD")
                t.setState(
                    {
                        topic: topicSelected,
                        widgets: val === null || undefined ? [] : val,
                    }
                )
                cStore.dispatch(
                    {
                        type: "LOAD",
                        widgets: val === null || undefined ? [] : val,
                    }
                )
            }
        );

    }

    addLesson = (lessonToAdd) => {
        console.log(" L TO ADD : ")
        console.log(lessonToAdd)
        let t = this;
        this.lessonService.addLessonToModuleREST(this.state.module.id, lessonToAdd).then(
            function () {
                t.refreshContent();
                //t.selectModule(t.state.module)
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
                        courseId={this.courseId}
                        refreshContent={this.refreshContent}
                    />
                    <div className="col-9 bg-light text-dark">
                        <LessonTabs
                            moduleId={this.state.module.id}
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
                            <WidgetListContainer
                                widgets={this.state.topic === undefined ? [] : this.state.topic.widgets}
                                topicId={this.state.topic === undefined ? '' : this.state.topic.id}
                            />
                        </Provider>
                    </div>

                </div>
            </div>


        )
    }
}

export default CourseEditor;