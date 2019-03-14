import CourseService from "../services/CourseService";

Array.prototype.move
    = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};
const widgets =
    {
        widgets: [
            {
                id: 123,
                title: 'Widget 1',
                type: 'HEADING',
                text: 'This is a heading',
                size: 2
            },
            {
                id: 234,
                title: 'Widget 2',
                type: 'IMAGE'
            }
        ]
    }
const widgetReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id),
                courseService: state.courseService,
                topicId: state.topicId
            }

        case 'ADD_WIDGET':
            action.widgets = action.widgets.map(widget => {
                return Object.assign({}, widget)
            })
            console.log("add")
            console.log(state)
            console.log(action)
            return {
                widgets: [
                    ...action.widgets,
                    {
                        id: (new Date()).getTime(),
                        type: 'HEADING',
                        size: 1,
                        text: 'New Widget',
                        toggle : false
                    }
                ],
                courseService: state.courseService,
                topicId: state.topicId

            }

        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                ),
                courseService: state.courseService,
                topicId: state.topicId
            }

        case 'MOVE_UP': {
            console.log("INSIDE RED MOVE UP")
            console.log(action.currentWidget);
            console.log(state.widgets)
            console.log(state.widgets.indexOf(action.currentWidget))

            let cId = state.widgets.indexOf(action.currentWidget)

            state.widgets.move(cId, cId - 1)

            state.widgets = state.widgets.map(widget => {
                return Object.assign({}, widget)
            })
            return {
                widgets:state.widgets
            }
        }

        case 'MOVE_DOWN': {
            console.log("MD REDUCER")
            console.log(action.widget)
            let cId = state.widgets.indexOf(action.widget)

            state.widgets.move(cId, cId + 1)

            console.log(state.widgets)

            state.widgets = state.widgets.map(widget => {
                return Object.assign({}, widget)
            })

            return {
                widgets: state.widgets
            }
        }

        case 'LOAD':
            console.log("here")
            let newState = Object.assign({}, state);
            newState.widgets = action.widgets
            console.log(newState)
            return newState

        case 'PREVIEW_OFF': {

            state.widgets.map(widget =>widget.toggle = false)
            state.widgets = state.widgets.map(widget => {
                return Object.assign({}, widget)
            })
            return {
                widgets: state.widgets
            }
        }

        case 'PREVIEW_ON':
            state.widgets.map(widget =>widget.toggle = true)
            state.widgets = state.widgets.map(widget => {
                return Object.assign({}, widget)
            })
            return {
                widgets: state.widgets
            }


        default:
            return state;

    }
}

export default widgetReducer;