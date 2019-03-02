import React, {Component, lazy, Suspense} from 'react';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Fallback from '../components/fallback/Fallback';
const PageContentComponent = lazy(() => import('./page-content/PageContent'));


class Apps extends Component {
    render () {
        return (
            <React.Fragment>
                <Breadcrumbs />
                <Suspense fallback={<Fallback />}>
                    <PageContentComponent />
                </Suspense>
            </React.Fragment>
        );
    }
}

export default Apps;