import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import firebase from '../../firebase';

// import styles
import './sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainRoutes: [],
        }
    }

    componentDidMount () {
        let temp;
        firebase.database().ref().child('routes').on('value', snap => {
            temp = snap.val();
            temp.shift();
            this.setState({mainRoutes: temp}, () => {
                console.log(this.state.mainRoutes);
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="sidebar">
                    <p className="font-size-12">Root</p>
                    <div className="sidebar-menu">
                        {
                            this.state.mainRoutes.map((route, index) => {
                                return (
                                    <Link to={route.path} style={{ textDecoration: 'none' }} key={index}>
                                        <div className={route.nested === true ? "sidebar-item inner-item" : "sidebar-item"}>
                                            {route.nested ? <div className="vert-line"></div> : null}
                                            <p className={route.nested ? "sidebar-item-inner-text" : "sidebar-item-text"}>{route.folderName}</p>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Sidebar;