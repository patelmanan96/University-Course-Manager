import React from 'react'

const ListWidget = ({widget,updateWidget}) =>
    <div className="col-12">
        <div className="container p-2">
            <div className="form-group row">
                <div className="col-sm-12">
                    <textarea
                        onChange={event => {
                            widget.listItems = event.target.value;
                            widget.listArray = widget.listItems.split('\n')
                            updateWidget(widget)
                        }}
                        className="form-control">{widget.listItems}</textarea>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <select className="form-control">
                        <option value="">
                            Unordered List
                        </option>
                        <option value="" >
                            Ordered List
                        </option>
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <input className="form-control"
                           id="widgetL"
                           placeholder="Widget Name"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <h4>Preview</h4>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <p>
                        {
                              widget.listArray.map(wid =>
                                <ul>
                                    <li>{wid}</li>
                                </ul>
                            )
                        }

                    </p>
                </div>
            </div>
        </div>
    </div>
export default ListWidget;