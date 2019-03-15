class TopicService {
    constructor() {}

    addTopicREST = (lid,topic) => {
        return fetch('https://jpa-server-mananpatel.herokuapp.com/api/lesson/' + lid + '/topic', {
            method: 'post',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        })
    }
    updateTopic = (topic) => {
        return fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/' + topic.id, {
            method: 'put',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    deleteTopicREST = (topic) => {
        return fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/' + topic.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    getTopics = (lid) => {
        return fetch('https://jpa-server-mananpatel.herokuapp.com/api/lesson/' + lid, {
            method: 'get',}).then(
            function (val) {
                return val.json();
            }
        )
    }
}
export default TopicService;