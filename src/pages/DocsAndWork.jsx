import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Docs from './Docs';
import Work from './Work';

class DocsAndWork extends Component {
    render () {
        return (
            <React.Fragment>
                <Switch>
                    <Route 
                        key={"docs"+1}
                        path={'/docs'}
                        exact={true}
                        component={() => <Docs />}
                    >
                    </Route>
                    <Route
                        key={"work"+2}
                        path={'/docs/work'}
                        component={() => <Work />}
                    >
                    </Route>
                </Switch>
            </React.Fragment>
        );
    }
}

export default DocsAndWork;