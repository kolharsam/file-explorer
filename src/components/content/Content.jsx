import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import firebase from '../../firebase';

import OneComponent from '../../pages/OneComponent';
import NoLink from '../helpers/NoLink';

//import styles 
import './content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainRoutes: [],
            fetchedData: false
        };
    }

    componentDidMount () {
        firebase.database().ref().child('routes').on('value', snap => {
            let tempArr = snap.val();
            this.setState({mainRoutes: tempArr, fetchedData: true});
        });
    }

    render () {
        return (
            this.state.fetchedData ?
                <React.Fragment>
                    <div className="content">
                        <Switch>
                            {this.state.mainRoutes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={OneComponent}
                                />
                            ))}
                            <Route component={NoLink} />
                        </Switch>
                    </div>
                </React.Fragment>
            : null
        );
    }
}

export default Content;