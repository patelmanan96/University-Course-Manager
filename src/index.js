import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import Hello from './components/hello';
import WhiteBoard from './components/Whiteboard'
import ModuleList from "./components/ModuleList";
import CourseTable from './containers/CourseTable'

ReactDOM.render(<WhiteBoard/>,
    document.getElementById("root"));