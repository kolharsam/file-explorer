import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import FileInfoPopup from './FileInfo';

import '../../styles/context-menu.css';

class RightClickMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: props.show,
            showInfoPopup: false
        }

        this.onClickOpen = this.onClickOpen.bind(this);
        this.showGetInfo = this.showGetInfo.bind(this);
        this.hideGetinfo = this.hideGetinfo.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onClickOpen () {
        // TODO: to open popup for the rest of the files.
    }

    showGetInfo () {
        this.setState({showInfoPopup: true}, () => {
            console.log('hello' + this.state.showInfoPopup)
        });
    }

    hideGetinfo () {
        this.setState({ showInfoPopup: false });
    }

    onClickDelete () {
        // TODO: open a popup for delete!
    }

    // componentWillUnmount () {
    //     setInterval(() => {console.log('hello, world')}, 3000);
    // }
    
    render () {
        return (
            <React.Fragment>
                <div>
                {
                    this.state.showMenu ? (
                        <div className="menu" style={{borderRadius: '8px'}}>
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
                            <div className="option" onClick={this.showGetInfo}>
                                    <div className="menu-text">Get Info</div>
                                    {this.state.showInfoPopup ? 
                                        <FileInfoPopup onClose={this.hideGetinfo}>
                                            This is a message!
                                            {console.log('asda')}
                                        </FileInfoPopup>
                                    : null}
                            </div>
                            <div className="option" onClick={this.onClickDelete}>
                                <div className="menu-text">Delete</div>
                            </div>
                        </div>
                        )
                    : null
                }
                </div>
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
    linkTo: PropTypes.string,
}

export default RightClickMenu;