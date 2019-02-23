import React, { Component } from 'react';
import Breadcumbs from '../components/breadcrumbs/Breadcrumbs';
import PageContent from './page-content/PageContent';


class Work extends Component {
    render() {
        return (
            <React.Fragment>
                <Breadcumbs />
                <PageContent />
            </React.Fragment>
        );
    }
}

export default Work;