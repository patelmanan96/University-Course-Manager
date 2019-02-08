import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";




const WidgetComponent = ({widget, deleteWidget, updateWidget}) =>
        <div>
            <div className="row p-3">
                <div className="col-12">
                    <div className="card bg-transparent">
                        <div className="container p-2">



                            <div className="form-group row">
                                <div className="col-5 m-1">
                                    <h3>{widget.type} WIDGET</h3>
                                </div>
                                <div className="col-2 p-1">
                                    <button className="btn btn-warning btn-md">
                                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                                    </button>
                                    <button className="btn btn-warning btn-md">
                                        <i className="fa fa-arrow-up" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <div className="col-3 p-1">
                                    <select className="form-control" onChange={(event) => {
                                        widget.type = event.target.value
                                        updateWidget(widget)
                                    }} value={widget.type}>
                                        <option value="HEADING" selected>
                                            Heading
                                        </option>
                                        <option value="PARAGRAPH">
                                            Paragraph
                                        </option>
                                        <option value="LIST">
                                            List
                                        </option>
                                        <option value="IMAGE">
                                            Image
                                        </option>
                                        <option value="LINK">
                                            Link
                                        </option>
                                    </select>
                                </div>

                                <div className="col-1 p-1 float-right">
                                    <button className="btn btn-danger btn-md" onClick={() => deleteWidget(widget)}>
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>

                                {
                                    widget.type==='HEADING' && <HeadingWidget updateWidget={updateWidget} widget={widget}/>

                                    ||

                                    widget.type==='IMAGE' && <ImageWidget updateWidget={updateWidget} widget={widget}/>

                                    ||

                                    widget.type==='PARAGRAPH' && <ParagraphWidget updateWidget={updateWidget} widget={widget}/>

                                    ||

                                    widget.type==='LIST' && <ListWidget updateWidget={updateWidget} widget={widget}/>

                                    ||

                                    widget.type==='LINK' && <LinkWidget updateWidget={updateWidget} widget={widget}/>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


export default WidgetComponent