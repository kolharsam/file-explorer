import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Routes from '../../routes/Routes';

//import styles 
import './content.css';

class Content extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="content">
                    <Switch>
                        {Routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            >
                            </Route>
                        ))}
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default Content;