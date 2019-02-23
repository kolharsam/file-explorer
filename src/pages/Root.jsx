import React, { Component } from 'react';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import PageContent from './page-content/PageContent';


class Root extends Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs />
                <PageContent />
            </React.Fragment>
        );
    }
}

export default Root;