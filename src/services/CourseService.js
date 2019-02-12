import courses from './courses.json'

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


    updateCourse = course => {
        this.courses.map(courseCurrent =>
            courseCurrent.id === course.id ? course: courseCurrent
        )
    }


}

export default CourseService