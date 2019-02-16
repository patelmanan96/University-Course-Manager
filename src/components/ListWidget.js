import React from 'react'

const ListWidget = ({widget, updateWidget}) =>
    <div className="col-12">
        <div className="container p-2">
            {
                widget.toggle === false && <div>
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
                            <select className="form-control" onChange={event => {
                                widget.listType = event.target.value;
                                updateWidget(widget);
                            }}
                                    value={widget.listType}
                            >
                                <option value="unordered">
                                    Unordered List
                                </option>
                                <option value="ordered">
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
                </div>
            }
            <div className="form-group row">
                <div className="col-sm-12">
                    {
                        widget.listItems === undefined && <p></p>
                    }
                    {
                        widget.listItems !== undefined && <p onLoad={widget.listArray = widget.listItems.split('\n')}>
                            {
                                widget.listType === 'unordered' &&
                                <ul>
                                    {
                                        widget.listArray.map(wid =>
                                            <li>{wid}</li>
                                        )
                                    }
                                </ul>
                                ||
                                widget.listType === 'ordered' &&
                                <ol>
                                    {

                                        widget.listArray.map(wid =>

                                            <li>{wid}</li>
                                        )
                                    }
                                </ol>
                            }
                        </p>
                    }


                </div>
            </div>
        </div>
    </div>
export default ListWidget;