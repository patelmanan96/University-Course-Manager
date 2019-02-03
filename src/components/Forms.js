import React from 'react';

const Forms = () =>
    <div>
        <div className="row p-3">
            <div className="col-9"></div>
            <div className="col-1">
                <button className="btn btn-success btn-md">
                    Save
                </button>
            </div>
            <div className="col-1 p-2">
                <h6>&nbsp;Preview</h6>
            </div>
            <div className="col-1">
                <i className="fa fa-2x pd-1 fa-toggle-off" aria-hidden="true"></i>
            </div>
        </div>

        <div className="row p-3">
            <div className="col-12">
                <div className="card bg-transparent">
                    <div className="container p-2">
                        <form>
                            <div className="form-group row">
                                <div className="col-5 m-1">
                                    <h3>Heading Widget</h3>
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
                                    <select className="form-control">
                                        <option value="Heading" selected>
                                            Heading
                                        </option>
                                        <option value="Paragraph">
                                            Paragraph
                                        </option>
                                        <option value="List">
                                            List
                                        </option>
                                        <option value="Image">
                                            Image
                                        </option>
                                        <option value="Link">
                                            Link
                                        </option>
                                    </select>
                                </div>
                                <div className="col-1 p-1 float-right">
                                    <button className="btn btn-danger btn-md"><i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>


                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <input className="form-control"
                                           id="headingT"
                                           placeholder="Heading Text"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <select className="form-control">
                                        <option value="heading1">
                                            Heading1
                                        </option>
                                        <option value="heading2">
                                            Heading2
                                        </option>
                                        <option value="heading3">
                                            Heading3
                                        </option>
                                        <option value="heading4">
                                            Heading4
                                        </option>
                                        <option value="heading5">
                                            Heading5
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <input className="form-control"
                                           id="widgetN"
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
                                    <h1>Heading Text</h1>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <div className="row p-3">
            <div className="col-12">
                <div className="card bg-transparent">
                    <div className="container p-2">
                        <form>
                            <div className="form-group row">
                                <div className="col-5 m-1">
                                    <h3>Paragraph Widget</h3>
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
                                    <select className="form-control">
                                        <option value="Heading">
                                            Heading
                                        </option>
                                        <option value="Paragraph" selected>
                                            Paragraph
                                        </option>
                                        <option value="List">
                                            List
                                        </option>
                                        <option value="Image">
                                            Image
                                        </option>
                                        <option value="Link">
                                            Link
                                        </option>
                                    </select>
                                </div>
                                <div className="col-1 p-1 float-right">
                                    <button className="btn btn-danger btn-md"><i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>


                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <textarea className="form-control">Type Paragraph here</textarea>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <input className="form-control"
                                           id="widgetNP"
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
                                    <p>Type Paragraph here</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="row p-3">
            <div className="col-12">
                <div className="card bg-transparent">
                    <div className="container p-2">
                        <form>
                            <div className="form-group row">
                                <div className="col-5 m-1">
                                    <h3>List Widget</h3>
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
                                    <select className="form-control">
                                        <option value="Heading">
                                            Heading
                                        </option>
                                        <option value="Paragraph">
                                            Paragraph
                                        </option>
                                        <option value="List" selected>
                                            List
                                        </option>
                                        <option value="Image">
                                            Image
                                        </option>
                                        <option value="Link">
                                            Link
                                        </option>
                                    </select>
                                </div>
                                <div className="col-1 p-1 float-right">
                                    <button className="btn btn-danger btn-md"><i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>


                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <textarea className="form-control">Items</textarea>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="row p-3">
            <div className="col-12">
                <div className="card bg-transparent">
                    <div className="container p-2">
                        <form>
                            <div className="form-group row">
                                <div className="col-5 m-1">
                                    <h3>Image Widget</h3>
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
                                    <select className="form-control">
                                        <option value="Heading">
                                            Heading
                                        </option>
                                        <option value="Paragraph">
                                            Paragraph
                                        </option>
                                        <option value="List">
                                            List
                                        </option>
                                        <option value="Image" selected>
                                            Image
                                        </option>
                                        <option value="Link">
                                            Link
                                        </option>
                                    </select>
                                </div>
                                <div className="col-1 p-1 float-right">
                                    <button className="btn btn-danger btn-md"><i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <input className="form-control" type="url" placeholder="Image link"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <input className="form-control"
                                           id="widgetI"
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
                                    <img src="https://www.gstatic.com/webp/gallery/1.jpg"
                                         alt="Photo of Byron Bay, one of Australia's best beaches!"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="row p-3">
            <div className="col-12">
                <div className="card bg-transparent">
                    <div className="container p-2">
                        <form>
                            <div className="form-group row">
                                <div className="col-5 m-1">
                                    <h3>Link Widget</h3>
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
                                    <select className="form-control">
                                        <option value="Heading">
                                            Heading
                                        </option>
                                        <option value="Paragraph">
                                            Paragraph
                                        </option>
                                        <option value="List">
                                            List
                                        </option>
                                        <option value="Image">
                                            Image
                                        </option>
                                        <option value="Link" selected>
                                            Link
                                        </option>
                                    </select>
                                </div>
                                <div className="col-1 p-1 float-right">
                                    <button className="btn btn-danger btn-md"><i className="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <input className="form-control" type="url" placeholder="www.xyz.com"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <input className="form-control" type="text" placeholder="Link Text"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <input className="form-control"
                                           id="widgetLK"
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
                                    <a href="#">Link Text</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <div className="row p-3">
            <div className="col-12">
                <button className="btn btn-primary btn-block btn-md"><i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </div>;

export default Forms;
