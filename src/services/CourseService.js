import courses from './courses.json'

class CourseService {
    constructor() {
        this.courses = courses;
        this.urlToAllCourses = 'https://server-java-mananpatel.herokuapp.com/api/courses';
        this.urlToSessionCourses = 'https://server-java-mananpatel.herokuapp.com/api/sessionCourses'
        this.urlToCreateCourse = 'https://server-java-mananpatel.herokuapp.com/api/courses'
        this.urlToDelete = 'https://server-java-mananpatel.herokuapp.com/api/courses/'
    }

    static myInstance = null;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }


    addCourse = course => {
        if (course === null) {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course',
                modules: {
                    id: (new Date()).getTime(),
                    title: 'New Module',
                    lessons: [
                        {
                            id: (new Date()).getTime(),
                            title: 'Lesson 1',
                            topics: [{
                                id: (new Date()).getTime(),
                                title: 'Topic 1',
                                widgets: [
                                    {
                                        id: (new Date()).getTime(),
                                        type: "HEADING",
                                        size: 1,
                                        text: "WIDGET TEXT"
                                    }
                                ]
                            }]
                        }
                    ]
                }
            }
        }
        this.courses.push(course)
        return this.courses
    }


    findCourseById = courseId =>
        this.courses = this.courses.find(
            course => course.id === courseId
        )


    findAllCourses = () =>
        this.courses;

    deleteCourse = deleteCourse =>
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        )

    findWidgets = (topicId) => {
        console.log("TID  " + topicId);
        let ws = [];
        this.courses.find(
            course => {
                course.modules.find(
                    module => {
                        module.lessons.find(
                            lesson => {
                                lesson.topics.find(
                                    topic => {
                                        if (topic.id === topicId) {
                                            ws = topic.widgets;
                                        }
                                    }
                                )
                            }
                        )
                    }
                )

            })
        return ws;
    }

    moveUp = (topicId, widget) => {
        console.log("WID TO MOVE UP : ")
        console.log(widget)
        this.courses.map(course => {
            course.modules.map(module => {
                    module.lessons.map(lesson => {
                        lesson.topics.map(topic => {
                            if (topic.id === topicId) {
                                let indexUp = topic.widgets.indexOf(widget);
                                topic.widgets.move(indexUp, indexUp - 1);
                            }
                        })
                    })
                }
            )
        })
    }

    updateCourse = course => {
        this.courses.map(courseCurrent =>
            courseCurrent.id === course.id ? course : courseCurrent
        )
    }

    createWidget = (topicId, widgets) => {
        this.courses.map(course => {
            course.modules.map(module => {
                    module.lessons.map(lesson => {
                        lesson.topics.map(topic => {
                            if (topic.id === topicId) {
                                topic.widgets = widgets;
                                console.log("INSIDE C SERVICE")
                                console.log(topic.widgets)
                            }
                        })
                    })
                }
            )
        })
        //return this.courses;
    }

    findSessionCourses = () => {
        return fetch(this.urlToSessionCourses,
            {
                credentials: 'include',
                method: 'get',
            }).then(function (value) {
            return value.json();
        });
    }

    createCourseRest = (course) => {
        console.log("REST CSERV START")
        console.log(course);
        console.log("END")
        return fetch(this.urlToCreateCourse, {
            method: 'post',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    deleteCourseRest = (course) => {
        console.log(this.urlToDelete + ""+ course.id)
        return fetch(this.urlToDelete + course.id,{
            method: 'delete'
        })
    }

    findCourseByIdRest = (courseId) => {
        return fetch('https://server-java-mananpatel.herokuapp.com/api/courses/' + courseId,
            {
                method: 'get'
            }).then(function (value) {
            return value.json();
        });
    }


}

export default CourseService