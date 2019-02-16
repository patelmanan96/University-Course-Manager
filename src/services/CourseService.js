import courses from './courses.json'

Array.prototype.move
    = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

class CourseService {
    constructor() {
        this.courses = courses;
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
        console.log("TID  "+ topicId);
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

    moveUp = (topicId,widget) => {
        console.log("WID TO MOVE UP : ")
        console.log(widget)
        this.courses.map(course => {
            course.modules.map(module => {
                    module.lessons.map(lesson => {
                        lesson.topics.map(topic => {
                            if (topic.id === topicId) {
                                let indexUp = topic.widgets.indexOf(widget);
                                topic.widgets.move(indexUp,indexUp-1);
                            }
                        })
                    })
                }
            )
        })
    }

    updateCourse = course => {
        this.courses.map(courseCurrent =>
            courseCurrent.id === course.id ? course: courseCurrent
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


}

export default CourseService