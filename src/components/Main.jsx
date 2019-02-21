import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// Component Imports
import Content from './content/Content';
import Sidebar from './sidebar/Sidebar';

// Styles Imports
import '../styles/fonts.css';
import '../styles/layout.css'

class Main extends Component {
    render () {
        return (
            <React.Fragment>
                <Router>
                    <div className="main-content">
                        <Sidebar />
                        <Content />
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default Main;