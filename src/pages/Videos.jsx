import React, { Component } from 'react';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

import '../styles/pages.css';

class Videos extends Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs />
                <h2 className="page-content">This is videos page.</h2>
            </React.Fragment>
        );
    }
}

export default Videos;