import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import styles
import './sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sidebar">
                    <p className="font-size-12">Root</p>
                    <div className="sidebar-menu">
                        <Link to="/apps" style={{textDecoration: 'none'}}>
                            <div className="sidebar-item" key="1">
                                <p className="sidebar-item-text">Apps</p>
                            </div>
                        </Link>
                        <Link to="/pictures" style={{textDecoration: 'none'}}>
                            <div className="sidebar-item" key="2">
                                <p className="sidebar-item-text">Pictures</p>
                            </div>
                        </Link>
                        <Link to="/videos" style={{textDecoration: 'none'}}>
                            <div className="sidebar-item" key="3">
                                <p className="sidebar-item-text">Videos</p>
                            </div>
                        </Link>
                        <Link to="/docs" style={{textDecoration: 'none'}}>
                            <div className="sidebar-item" key="4">
                                <p className="sidebar-item-text">Docs</p>
                                <button className={"sidebar-item-extend clicked"}>
                                    <i className="fas fa-caret-up"></i>
                                </button>
                            </div>
                        </Link>
                        <Link to="/docs/work" style={{textDecoration: 'none'}}>
                            <div className="sidebar-item inner-item" key="5">
                                <div className="vert-line"></div>
                                <p className="sidebar-item-inner-text">Work</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Sidebar;