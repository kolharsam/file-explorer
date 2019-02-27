import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../styles/fileorfolder.css';

class AddFileOrFolder extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            fileOrFolder: 'file',
            setToFileOrFolder: false, // 1 - file & 0 - folder
        }

        this.handleOnClickFile = this.handleOnClickFile.bind(this);
        this.handleOnClickFolder = this.handleOnClickFolder.bind(this);
    }

    handleOnClickFile (e) {
        e.preventDefault();
        this.setState({fileOrFolder: 'file', setToFileOrFolder: true}, () => {console.log('set to file')});
    }

    handleOnClickFolder(e) {
        e.preventDefault();
        this.setState({fileOrFolder: 'folder', setToFileOrFolder: false}, () => {console.log('set to folder')});
    }

    render() {
        return(
            <React.Fragment>
                <div className="popup">
                    <div className="popup_inner">
                        <div className="top">
                            <h4 className="heading">{this.props.text}</h4>
                            <button className="closeButton" onClick={this.props.closePopup}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="fileType">
                            <button className={"file_button " + (this.state.setToFileOrFolder ? 'selected' : null)} onClick={e => this.handleOnClickFile(e)}>File</button>
                            <button className={"folder_button " + (!this.state.setToFileOrFolder ? 'selected' : null)} onClick={e => this.handleOnClickFolder(e)}>Folder</button>
                        </div>
                        <div className="texts">
                            <input className="input" type="text" placeholder="Name" />
                            <input className="input" type="text" placeholder="Creator" />
                            <input className="input" type="text" placeholder="Size" />
                            <input className="input" type="text" placeholder="Date" />
                        </div>
                        <div>
                            <button className="createBtn">Create</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

AddFileOrFolder.propTypes = {
    text: PropTypes.string.isRequired,
    closePopup: PropTypes.func.isRequired,
}

export default AddFileOrFolder;