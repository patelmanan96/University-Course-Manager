import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col-md-1 col-2 p-2 mt-2 bg-primary">
                        <i className="fa p-2 fa-bars float-left fa-lg"></i>
                    </div>
                    <div className="col-md-3 d-none d-sm-block p-2 mt-2 bg-primary">
                        <h4 className="text-white float-sm-left ml-2">Course Manager</h4>
                    </div>
                    <div className="col-md-8 col-10 pt-2  bg-primary">
                        <div className="form-group row">
                            <div className="col-10 col-sm-10">
                                <input className="form-control mt-2" placeholder="Course Title"/>
                            </div>
                            <div className="col-2 col-sm-2">
                                <i className="fa fa-plus float-left fa-2x mt-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default NavBar;