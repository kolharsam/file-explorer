import React, { Component, lazy, Suspense } from 'react';
import Breadcumbs from '../components/breadcrumbs/Breadcrumbs';
import Fallback from '../components/fallback/Fallback';
const PageContentComponent = lazy(() => import('./page-content/PageContent'));


class Work extends Component {
    render() {
        return (
            <React.Fragment>
                <Breadcumbs />
                <Suspense fallback={<Fallback />}>
                    <PageContentComponent />
                </Suspense>
            </React.Fragment>
        );
    }
}

export default Work;