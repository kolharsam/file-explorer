import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import firebase from './../../firebase';

import '../../styles/fileorfolder.css';

class PreAddFileOrFolder extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            path: props.location.pathname,
            fileOrFolder: 'file',
            setToFileOrFolder: true, // 1 - file & 0 - folder,
            fileName: '',
            fileCreator: '',
            fileSize: '',
            fileDate: '',
            createClicked: 'Create',
            wholeObject: undefined
        }

        this.handleOnClickFile = this.handleOnClickFile.bind(this);
        this.handleOnClickFolder = this.handleOnClickFolder.bind(this);

        this.onChangeFileName = this.onChangeFileName.bind(this);
        this.onChangeFileCreator = this.onChangeFileCreator.bind(this);
        this.onChangeFileSize = this.onChangeFileSize.bind(this);
        this.onChangeFileCreated = this.onChangeFileCreated.bind(this);

        this.returnFileClass = this.returnFileClass.bind(this);

        this.onClickCreate = this.onClickCreate.bind(this);

        this.addToDirectory = this.addToDirectory.bind(this);
    }

    handleOnClickFile (e) {
        e.preventDefault();
        this.setState({ 
                        fileOrFolder: 'file', 
                        setToFileOrFolder: true,
                        fileName: '',
                        fileCreator: '',
                        fileSize: '',
                        fileDate: ''
                    });
    }

    handleOnClickFolder (e) {
        e.preventDefault();
        this.setState({
                        fileOrFolder: 'folder', 
                        setToFileOrFolder: false,
                        fileName: '',
                        fileCreator: '',
                        fileSize: '',
                        fileDate: ''
                    });
    }

    onChangeFileName (e) {
        this.setState({fileName: e.target.value});
    }

    onChangeFileCreator (e) {
        this.setState({fileCreator: e.target.value});
    }

    onChangeFileCreated (e) {
        this.setState({fileDate: e.target.value});
    }

    onChangeFileSize (e) {
        this.setState({fileSize: e.target.value});
    }

    returnFileClass (name) {
        let extension = name.trim().split(".").pop();
        
        if (extension === 'jpg' || extension === 'png' || extension === 'svg') {
            return 'image';
        } else if (extension === 'mp4' || extension === 'mov' || extension === 'mkv') {
            return 'video';
        } else if (extension === 'doc' || extension === 'docx' || extension === 'pages') {
            return 'doc';
        } else if (extension === 'txt') {
            return 'text';
        } else if (extension === 'pdf') {
            return 'pdf';
        } else if (extension === 'mp3' || extension === 'wav' || extension === 'aac') {
            return 'audio';
        } else {
            return 'file';
        }
    }

    addToDirectory(path, newObject) {
        let iterator = undefined;

        if (this.state.setToFileOrFolder === true) {
            iterator = 0;

            let tempFiles = this.props.files.files;

            for (iterator = 0; iterator < tempFiles.length; iterator++) {
                if (tempFiles[iterator].path === path) {
                    break;
                }
            }

            tempFiles[iterator].filesAndFoldersPresent.push(newObject);

            firebase.database().ref().set({ files: tempFiles, routes: this.props.files.routes });
        } else {
            iterator = 0;

            let tempFiles = this.props.files.files;
            let tempRoutes = this.props.files.routes;

            for (iterator = 0; iterator < tempFiles.length; iterator++) {
                if (tempFiles[iterator].path === path) {
                    break;
                }
            }

            tempFiles[iterator].filesAndFoldersPresent.push({
                createdDate: newObject.createdDate,
                creatorName: newObject.creatorName,
                filename: newObject.filename,
                linkTo: newObject.path,
                size: newObject.size,
                type: 'folder'
            });

            if (this.state.path === '/') {
                tempRoutes.push({
                    exact: false,
                    folderName: newObject.filename,
                    folderPresent: false,
                    path: newObject.path
                });
            } else {

                for (iterator=0; iterator < tempRoutes.length; iterator++) {
                    if (tempRoutes[iterator].path === path) {
                        tempRoutes[iterator].exact = true;
                        tempRoutes[iterator].foldersPresent = true;
                        break;
                    }
                }

                tempRoutes.splice(iterator+1, 0, {
                    exact:  false,
                    folderName: newObject.filename,
                    foldersPresent: false,
                    nested: true,
                    path: newObject.path
                });
            }

            tempFiles.push({
                filesAndFoldersPresent: [{
                    filename: 'No Files Present'
                }],
                path: newObject.path
            });

            firebase.database().ref().set({ files: tempFiles, routes: tempRoutes });
        }
        this.props.closePopup();
    }

    onClickCreate (e) {
        e.preventDefault();
        
        let resObject = {};

        this.setState({createClicked: true});

        if (this.state.fileName === '' || this.state.fileSize === '' || this.state.fileCreator === '' || this.state.fileDate === '') {
            alert('Do not leave any incomplete fields.');
            this.setState({createClicked: 'Create'});
        } else {
            this.setState({createClicked: 'Created'});
            if (this.state.setToFileOrFolder) {
                resObject.filename = this.state.fileName;
                resObject.type = 'file';
                resObject.class = this.returnFileClass(this.state.fileName);
                resObject.size = this.state.fileSize;
                resObject.creatorName = this.state.fileCreator;
                resObject.createdDate = this.state.fileDate.toString();
                this.addToDirectory(this.state.path, resObject);
            } else {

                let link = ''; 

                if (this.state.path === '/') {
                    link = this.state.path + this.state.fileName.toLowerCase();
                } else {
                    link = this.state.path + "/" + this.state.fileName.toLowerCase();
                }
                        
                resObject.filename = this.state.fileName;
                resObject.type = 'folder';
                resObject.class = this.returnFileClass(this.state.fileName);
                resObject.size = this.state.fileSize;
                resObject.creatorName = this.state.fileCreator;
                resObject.createdDate = this.state.fileDate.toString();
                resObject.path = link;
                this.addToDirectory(this.state.path, resObject);
            }
        }
    }

    render() {
        return(
            <React.Fragment>
                <div className="popup">
                    <div className="popup_inner">
                        <div className="top">
                            <h4 className="heading">Create {this.state.setToFileOrFolder ? "File  " : "Folder"}</h4>
                            <button className="closeButton" onClick={this.props.closePopup}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="fileType">
                            <button className={"file_button " + (this.state.setToFileOrFolder ? 'selected' : null)} onClick={e => this.handleOnClickFile(e)}>File</button>
                            <button className={"folder_button " + (!this.state.setToFileOrFolder ? 'selected' : null)} onClick={e => this.handleOnClickFolder(e)}>Folder</button>
                        </div>
                        <div className="texts">
                            <input className="input" type="text" placeholder="Name" onChange={e => this.onChangeFileName(e)} />
                            <input className="input" type="text" placeholder="Creator" onChange={e => this.onChangeFileCreator(e)} />
                            <input className="input" type="text" placeholder="Size" onChange={e => this.onChangeFileSize(e)} />
                            <input className="input" type="text" placeholder={"Date (" + new Date(Date.now()).toLocaleDateString() + ")"} onChange={e => this.onChangeFileCreated(e)} />
                        </div>
                        <div>
                            <button className="createBtn" onClick={e => this.onClickCreate(e)}>{this.state.createClicked}</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const AddFileOrFolder = withRouter(PreAddFileOrFolder);

AddFileOrFolder.propTypes = {
    closePopup: PropTypes.func.isRequired,
}

export default AddFileOrFolder;