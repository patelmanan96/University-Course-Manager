import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            module: {title: ''},
            modules: this.props.modules
        };

        // this.titleChanged = this.titleChanged.bind(this);
    }

    createModule = () => {
        this.setState(
            {
                modules: [
                    ...this.state.modules,
                    this.state.module
                ]
            }
        )
    }
    titleChanged = (event) => {
        this.setState(
            {
                module: {title: event.target.value}
            });
    }

    render() {
        return (
            <div className="col-3 bg-dark">
                <ul className="nav flex-column nav-pills">

                    {
                        this.state.modules.map(
                            (module) => {
                                return (
                                    <ModuleListItem
                                        selectModule={this.props.selectModule}
                                        key={module.id}
                                        module={module}/>
                                )
                            }
                        )
                    }

                    <div className="p-2"><input type="text" onChange={this.titleChanged}
                                                className="form-control" placeholder="Module Name"/></div>
                    <button className="btn btn-block btn-outline-primary" onClick={this.createModule}>
                        <i className="fa fa-plus"></i>
                    </button>

                </ul>
            </div>

        )
    }
}

export default ModuleList;