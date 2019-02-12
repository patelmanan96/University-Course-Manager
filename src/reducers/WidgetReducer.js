import CourseService from "../services/CourseService";

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
const widgetReducer = (state = {widgets: []}, action) => {
    console.log(state)
    switch(action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id),
                courseService : state.courseService,
                topicId:state.topicId
            }

        case 'ADD_WIDGET':
            action.widgets = action.widgets.map(widget =>{
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
                        text: 'New Widget',
                        size: 1
                    }
                ],
                courseService : state.courseService,
                topicId:state.topicId

            }

        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                ),
                courseService : state.courseService,
                topicId:state.topicId
            }
        case 'MOVE_UP':
            return{

            }
        case 'MOVE_DOWN':
            return{

            }
        case 'LOAD':
            console.log("here")
            let newState = Object.assign({}, state);
            newState.widgets = action.widgets
            console.log(newState)
            return newState

        default:
            return state;

    }
}

export default widgetReducer;