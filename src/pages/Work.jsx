import React, { Component } from 'react';
import Breadcumbs from '../components/breadcrumbs/Breadcrumbs';

import '../styles/pages.css';

class Work extends Component {
    render() {
        return (
            <React.Fragment>
                <Breadcumbs />
                <h2 className="page-content">This is work page.</h2>
            </React.Fragment>
        );
    }
}

export default Work;