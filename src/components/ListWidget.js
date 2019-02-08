import React from 'react'

const ListWidget = ({widget,updateWidget}) =>
    <div className="col-12">
        <div className="container p-2">
            <div className="form-group row">
                <div className="col-sm-12">
                    <textarea
                        onChange={event => {
                            widget.text = event.target.value;
                            updateWidget(widget)
                        }}
                        className="form-control">Items</textarea>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <select className="form-control">
                        <option value="Heading">
                            Unordered List
                        </option>
                        <option value="Paragraph">
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
                        <ul>
                            <li>Items</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
export default ListWidget;