class LessonService {
    constructor() {

    }

    addLessonToModuleREST = (mid, lesson) => {
        return fetch('http://localhost:8080//api/module/' + mid + '/lesson', {
            method: 'post',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    editLessonREST = (lesson) => {
        return fetch('http://localhost:8080//api/lesson/' + lesson.id, {
            method: 'put',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    deleteLessonREST = (lesson) => {
        return fetch('http://localhost:8080//api/lesson/' + lesson.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
    }


}

export default LessonService;