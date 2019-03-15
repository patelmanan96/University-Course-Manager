class LessonService {
    constructor() {

    }

    addLessonToModuleREST = (mid, lesson) => {
        return fetch('https://jpa-server-mananpatel.herokuapp.com/api/module/' + mid + '/lesson', {
            method: 'post',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    editLessonREST = (lesson) => {
        return fetch('https://jpa-server-mananpatel.herokuapp.com/api/lesson/' + lesson.id, {
            method: 'put',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    deleteLessonREST = (lesson) => {
        return fetch('https://jpa-server-mananpatel.herokuapp.com/api/lesson/' + lesson.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
    }


}

export default LessonService;