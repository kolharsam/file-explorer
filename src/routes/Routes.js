import React from 'react';

// imports of the components.
import Root from '../pages/Root';
import Apps from '../pages/Apps';
import Pictures from '../pages/Pictures';
import Videos from '../pages/Videos';
import DocsAndWork from '../pages/DocsAndWork';
import Work from '../pages/Work';

const Routes = [
    {
        path: '/',
        exact: true,
        component: () => <Root />
    },
    {
        path: '/apps',
        component: () => <Apps />
    },
    {
        path: '/pictures',
        component: () => <Pictures />
    },
    {
        path: '/videos',
        component: () => <Videos />
    },
    {
        path: '/docs',
        exact: true,
        component: () => <DocsAndWork />,
    },
    {
        path: '/docs/work', 
        component: () => <Work />
    }
];

export default Routes;