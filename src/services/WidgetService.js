import courses from "./courses";
import ModuleService from "./ModuleService";
import LessonService from "./LessonService";
import TopicService from "./TopicService";

class WidgetService{
    constructor() {}

    addHeadingWidget = (widToAdd, tid) => {
        widToAdd.id = null;
        fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/'+ tid +'/headingWidget', {
            method: 'post',
            body: JSON.stringify(widToAdd),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    addLinkWidget = (widToAdd, tid) => {
        widToAdd.id = null;
        fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/'+ tid +'/linkWidget', {
            method: 'post',
            body: JSON.stringify(widToAdd),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    addParagraphWidget = (widToAdd, tid) => {
        widToAdd.id = null;
        fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/'+ tid +'/paragraphWidget', {
            method: 'post',
            body: JSON.stringify(widToAdd),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    addImageWidget = (widToAdd, tid) => {
        widToAdd.id = null;
        fetch('http://localhost:8080//api/topic/'+ tid +'/imageWidget', {
            method: 'post',
            body: JSON.stringify(widToAdd),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    addListWidget = (widToAdd, tid) => {
        widToAdd.id = null;
        fetch('http://localhost:8080//api/topic/'+ tid +'/listWidget', {
            method: 'post',
            body: JSON.stringify(widToAdd),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    saveWidgets = (topicId, listOfWidgets) => {
        let order = 1
        return this.deleteWidgetsForTopic(topicId).then(
            listOfWidgets.map(wid =>
                {
                    wid.order = order;
                    if(wid.type === "HEADING"){
                        this.addHeadingWidget(wid, topicId);
                    }
                    else if(wid.type === "PARAGRAPH"){
                        this.addParagraphWidget(wid, topicId);
                    }
                    else if(wid.type === "LIST"){
                        this.addListWidget(wid, topicId);
                    }
                    else if(wid.type === "LINK"){
                        this.addLinkWidget(wid, topicId);
                    }
                    else if(wid.type === "IMAGE"){
                        this.addImageWidget(wid, topicId);
                    }
                    order++;
                }
            )
        );
    }

    deleteWidgetsForTopic = (topicId) => {
        return fetch('http://localhost:8080//api/topic/' + topicId + '/widget',
            {
                method: 'delete'
            });
    }

    loadWidgetsForTopic = (topicId) => {
        return fetch('http://localhost:8080//api/topic/' + topicId + '/widget',
            {
                method: 'get'
            }).then(function (value) {
            return value.json();
        });
    }
}
export default WidgetService;
