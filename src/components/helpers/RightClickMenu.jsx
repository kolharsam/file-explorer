import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../styles/context-menu.css';

class RightClickMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: props.show
        }
    }

    render () {
        return (
            <React.Fragment>
                {
                    this.state.showMenu ? (
                        <div className="menu">
                            <div className="option">
                                <div className="menu-text">Open</div>
                            </div>
                            <div className="option">
                                <div className="menu-text">Get Info</div>
                            </div>
                            <div className="option">
                                <div className="menu-text">Delete</div>
                            </div>
                        </div>
                        ) 
                    : null
                }
            </React.Fragment> 
        );  
    }
}

RightClickMenu.propTypes = {
    show: PropTypes.bool.isRequired,
}

export default RightClickMenu;