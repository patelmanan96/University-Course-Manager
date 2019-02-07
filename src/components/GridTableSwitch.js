import React from 'react';
import {Link} from 'react-router-dom'


const GridTableSwitch = ({whatSwitch}) =>
    <Link to={whatSwitch}><i className="fa fa-th float-right text-dark"></i></Link>

export default GridTableSwitch;

