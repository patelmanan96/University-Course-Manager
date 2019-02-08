import React from 'react'
import WidgetComponent from './WidgetComponent'
const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget}) =>
    <div>
        <h1>Widget List {widgets.length}</h1>
        <div className="list-group">
            {
                widgets.map(widget =>
                    <WidgetComponent
                        key={widget.id}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
                )
            }
            <div className="row p-3">
                <div className="col-12">
                    <button onClick={addWidget} className="btn btn-primary btn-block btn-md"><i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

export default WidgetList