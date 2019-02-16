import React from 'react'
import WidgetComponent from './WidgetComponent'

const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget, moveUp, moveDown,save}) =>
    <div>
        <h1>Widget List {widgets.length}</h1>
        <div className="row p-3">
            <div className="col-9"/>
            <div className="col-1">
                <button onClick={() => {save(widgets) ; console.log(widgets)}} className="btn btn-success btn-md">
                Save
            </button>
            </div>
            <div className="col-1 p-2">
                <h6>&nbsp;Preview</h6>
            </div>
            <div className="col-1">
                <a onClick={() => alert("Hello")}>
                <i className="fa fa-2x pd-1 fa-toggle-off" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <div className="list-group">
            {
                widgets.map(widget =>
                    <WidgetComponent
                        key={widget.id}
                        moveUp = {moveUp}
                        moveDown = {moveDown}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
                )
            }
            <div className="row p-3">
                <div className="col-12">
                    <button onClick={()=>addWidget(widgets)} className="btn btn-primary btn-block btn-md"><i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

export default WidgetList