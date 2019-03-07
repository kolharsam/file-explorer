import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';

import FileInfoPopup from './FileInfo';

import '../../styles/context-menu.css';
import DeletePopup from './DeletePopup';

class RightClickMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showInfoPopup: false,
            showDeletePopup: false
        }

        this.onClickOpen = this.onClickOpen.bind(this);
        this.toggleInfoPopup = this.toggleInfoPopup.bind(this);
        this.toggleDeletePopup = this.toggleDeletePopup.bind(this);
        this.confirmDeleteClicked = this.confirmDeleteClicked.bind(this);
    }

    onClickOpen (e) {
        e.preventDefault();
        this.setState({ showInfoPopup: !this.state.showInfoPopup });
    }

    toggleInfoPopup (e) {
        e.preventDefault();

        this.setState({showInfoPopup: !this.state.showInfoPopup});
    }

    toggleDeletePopup (e) {
        e.preventDefault();

        this.setState({showDeletePopup: !this.state.showDeletePopup});
    }

    confirmDeleteClicked (e) {
        e.preventDefault();

        this.setState({ showDeletePopup: !this.state.showDeletePopup
        }, () => {

            let tempFiles = this.props.filesObject.files;
            let tempRoutes = this.props.filesObject.routes;

            if (this.props.fileType === 'file') {

                let currentElement = [];
                let iterator = 0, iterator2 = 0;

                for (iterator = 0; iterator < tempFiles.length; iterator++) {
                    if (tempFiles[iterator].path === this.props.path) {
                        currentElement = tempFiles[iterator].filesAndFoldersPresent;
                        break;
                    }
                }

                let tempFilesAndFoldersPresent = [];

                for (iterator2 = 0; iterator2 < currentElement.length; iterator2++) {
                    if (currentElement[iterator2].filename !== this.props.fileName) {
                        tempFilesAndFoldersPresent.push(currentElement[iterator2]);
                    }
                }

                if (tempFilesAndFoldersPresent.length === 0) {
                    tempFilesAndFoldersPresent.push({filename: 'No Files Present'});
                } 

                tempFiles[iterator].filesAndFoldersPresent = tempFilesAndFoldersPresent;

            } else if (this.props.fileType === 'folder') {

                let replaceFiles = tempFiles.filter((files) => {
                    let file;
                    if (files.path !== this.props.linkTo) {
                        file = files;
                    }
                    return file;
                });

                let iter = 0;

                for (iter=0; iter < replaceFiles.length; iter++) {
                    if (replaceFiles[iter].path === this.props.path) {
                        break;
                    }
                }

                let newTempArr = replaceFiles[iter].filesAndFoldersPresent.filter(file => {
                    let file2;
                    if (file.filename !== this.props.fileName) {
                        file2 = file;
                    }
                    return file2;
                }); 

                replaceFiles[iter].filesAndFoldersPresent = newTempArr;

                let replaceRoutes = tempRoutes.filter((route) => {
                    let rt;
                    if (!route.path.includes(this.props.linkTo)) {
                        rt = route;
                    }
                    return rt;
                });

                tempFiles = replaceFiles;
                tempRoutes = replaceRoutes;

            } else {
                alert('File Type unknown. Could not delete file.');
            }
 
            firebase.database().ref().set({files: tempFiles, routes: tempRoutes});
        });
    }
    
    render () {
        return (
            <React.Fragment>
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
                                        <div className="option" onClick={e => this.onClickOpen(e)}>
                                            <div className="menu-text">
                                                Open
                                            </div>
                                        </div>
                            }
                                <div className="option" onClick={e => this.toggleInfoPopup(e)}>
                                    <div className="menu-text">Get Info</div>
                                </div>
                                <div className="option" onClick={e => this.toggleDeletePopup(e)}>
                                    <div className="menu-text">Delete</div> 
                                </div>
                        </div>
                        )
                    : null           
                }
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

                    <DeletePopup
                        show={this.state.showDeletePopup}
                        filename={this.props.fileName}
                        filetype={this.props.fileType}
                        confirmDelete={this.confirmDeleteClicked}
                        path={this.props.path}
                        closePopup={this.toggleDeletePopup}
                    />
            </React.Fragment> 
        );  
    }
}

RightClickMenu.defaultProps = {
    show: false,
};

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