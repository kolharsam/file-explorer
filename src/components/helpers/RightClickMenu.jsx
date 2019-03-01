import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import FileInfoPopup from './FileInfo';

import '../../styles/context-menu.css';

class RightClickMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showInfoPopup: false
        }

        this.onClickOpen = this.onClickOpen.bind(this);
        this.toggleInfoPopup = this.toggleInfoPopup.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onClickOpen () {
        this.setState({ showInfoPopup: !this.state.showInfoPopup }, () => { console.log('ad') });
    }

    toggleInfoPopup (e) {
        e.preventDefault();

        this.setState({showInfoPopup: !this.state.showInfoPopup}, () => {console.log('ad')});
    }

    onClickDelete () {
        // TODO: open a popup for delete!
    }
    
    render () {
        return (
            <React.Fragment>
                <div>
                {
                    this.props.show ? (
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
                                <div className="option" onClick={e => this.toggleInfoPopup(e)}>
                                    <div className="menu-text">Get Info</div>
                                            <FileInfoPopup 
                                                show={this.state.showInfoPopup}
                                                filename={this.props.fileName} 
                                                filetype={this.props.fileType} 
                                                filesize={this.props.fileSize} 
                                                filecreator={this.props.fileCreatorName}
                                                filecreated={this.props.fileCreatedDate}
                                                fileclass={this.props.fileClass}
                                                text="File Info" 
                                                closePopup={this.toggleInfoPopup} 
                                            />
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