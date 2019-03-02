import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import Files from '../../files/files';

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
        }

        this.handleOnClickFile = this.handleOnClickFile.bind(this);
        this.handleOnClickFolder = this.handleOnClickFolder.bind(this);

        this.onChangeFileName = this.onChangeFileName.bind(this);
        this.onChangeFileCreator = this.onChangeFileCreator.bind(this);
        this.onChangeFileSize = this.onChangeFileSize.bind(this);
        this.onChangeFileCreated = this.onChangeFileCreated.bind(this);

        this.returnFileClass = this.returnFileClass.bind(this);

        this.onClickCreate = this.onClickCreate.bind(this);
    }

    handleOnClickFile (e) {
        e.preventDefault();
        this.setState({fileOrFolder: 'file', setToFileOrFolder: true});
    }

    handleOnClickFolder (e) {
        e.preventDefault();
        this.setState({fileOrFolder: 'folder', setToFileOrFolder: false});
    }

    onChangeFileName (e) {
        this.setState({fileName: e.target.value.trim()});
    }

    onChangeFileCreator (e) {
        this.setState({fileCreator: e.target.value.trim()});
    }

    onChangeFileCreated (e) {
        this.setState({fileDate: e.target.value.trim()});
    }

    onChangeFileSize (e) {
        this.setState({fileSize: e.target.value.trim()});
    }

    returnFileClass (name) {
        return name.trim().split(".").pop();
    }

    onClickCreate (e) {
        e.preventDefault();
        
        let resObject = {};

        if (this.state.fileName === '' || this.state.fileSize === '' || this.state.fileCreator === '' || this.state.fileDate === '') {
            alert('Do not leave any incomplete fields.');
        } else {

            resObject.filename = this.state.fileName;
            resObject.type = 'file';
            resObject.class = this.returnFileClass(this.state.fileName);
            resObject.size = this.state.fileSize;
            resObject.creatorName = this.state.fileCreator;
            resObject.creatorDate = this.state.fileDate;

            Files.addToFiles(this.state.path, resObject); 
            /* 
                this works but the page doesn't necessarily render the new file 
                as only the instance of the Files Object 
                in the browser is changed but not the Files object that
                is hard coded in the files.js file.
                I hard coded the values assuming that the items that are to be
                rendered on the page are based on a certain api response since
                every person is going to have a different directory structure but
                the information that is to be rendered can follow a general pattern.
                Extremely poor architecture. 
                I'm still learning and I now know some of my shortcomings.
                I will do whatever it takes to improve.
            */
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
                            <button className="createBtn" onClick={this.onClickCreate}>Create</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const AddFileOrFolder = withRouter(PreAddFileOrFolder);

AddFileOrFolder.propTypes = {
    text: PropTypes.string.isRequired,
    closePopup: PropTypes.func.isRequired,
}

export default AddFileOrFolder;