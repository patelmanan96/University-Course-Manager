import React from 'react';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            course:
                {
                    id: null,
                    title: null,
                    modules: [{
                        id:{},
                        title:{},
                        lessons:[{}]
                    }]
                }
        }
    }

    titleChange = (param) => {
        //console.log(param);
        this.setState(
            {
                course:
                    {
                        id: (new Date()).getTime(),
                        title: param.target.value,
                        modules: [{
                            id:{},
                            title:{},
                            lessons:[{}]
                        }]
                    }
            });
    };

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
                                <input onChange={this.titleChange} type="text" className="form-control mt-2" placeholder="Course Title"/>
                            </div>
                            <div className="col-2 col-sm-2">
                                <button onClick={() => this.props.addCourse(this.state.course)} className="btn-sm btn btn-outline-dark" >
                                <i className="fa fa-plus float-left fa-2x mt-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default NavBar;