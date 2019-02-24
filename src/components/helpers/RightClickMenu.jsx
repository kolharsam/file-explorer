import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import '../../styles/context-menu.css';

class RightClickMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: props.show
        }

        this.onClickOpen = this.onClickOpen.bind(this);
        this.onClickGetInfo = this.onClickGetInfo.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onClickOpen () {

    }

    onClickGetInfo () {

    }

    onClickDelete () {

    }

    componentWillMount() {
        console.log(this.props);
    }

    render () {
        return (
            <React.Fragment>
                {
                    this.state.showMenu ? (
                        <div className="menu">
                            {
                                this.props.fileType === 'folder' 
                                    ? 
                                        <Link to={this.props.linkTo} style={{ textDecoration: 'none', color: '#535B62'}}>
                                            <div className="option">
                                                <div className="menu-text">
                                                    Open
                                                </div>
                                            </div>
                                        </Link> 
                                    :   
                                        <div className="option" onClick={this.onClickOpen}>
                                            <div className="menu-text">
                                                Open
                                            </div>
                                        </div>
                            }
                            <div className="option" onClick={this.onClickGetInfo}>
                                <div className="menu-text">Get Info</div>
                            </div>
                            <div className="option" onClick={this.onClickDelete}>
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
    fileName: PropTypes.string.isRequired,
    fileType: PropTypes.string.isRequired,
    fileSize: PropTypes.string.isRequired,
    fileCreatorName: PropTypes.string.isRequired,
    fileCreatedDate: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
}

export default RightClickMenu;