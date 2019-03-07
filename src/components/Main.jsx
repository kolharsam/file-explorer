import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Fallback from '../components/fallback/Fallback';

// Styles Imports
import '../styles/fonts.css';
import '../styles/layout.css'

const Sidebar = lazy(() => import('./sidebar/Sidebar'));
const Content = lazy(() => import('./content/Content'));

class Main extends Component {
    render () {
        return (
            <React.Fragment>
                <Router>
                    <div className="main-content">
                        <Suspense fallback={<Fallback />}>
                            <Sidebar />
                            <Content />
                        </Suspense>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default Main;