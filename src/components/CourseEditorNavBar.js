import React from 'react';
import {Link} from 'react-router-dom';


const CourseEditorNavBar = ({title}) =>
    <nav className="navbar fixed-top text-white navbar-expand-lg navbar-light bg-light">
        <Link to="/table" className="btn btn-outline-primary text-black-50 btn-sm"><i className="fa fa-times"></i></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="navbar-brand nav-link text-primary" href="#">{title}</a>
        <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Build </a></li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pages</a></li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Theme</a></li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Store</a></li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Apps</a></li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Settings</a></li>
                <li className="nav-item">
                    <button className="btn btn-outline-dark btn-sm p-2"><i className="fa fa-plus"></i></button>
                </li>
            </ul>
        </div>
    </nav>

export default CourseEditorNavBar;