import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
//import Octicon, {X} from '@githubprimer/octicons-react';

import '../../styles/fileorfolder.css';

const modalRoot = document.getElementById('modal-root');

class AddFileOrFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileOrFolder: 'file'
        }

        this.handleOnClickFile = this.handleOnClickFile.bind(this);
        this.handleOnClickFolder = this.handleOnClickFolder.bind(this);
    }

    handleOnClickFile (e) {
        e.preventDefault();
        this.setState({fileOrFolder: 'file'}, () => {console.log('set to file')});
    }

    handleOnClickFolder(e) {
        e.preventDefault();
        this.setState({fileOrFolder: 'folder'}, () => {console.log('set to file')});
    }

    render() {
        // const fileOrfolder = this.state.fileOrFolder === 'file' ? 'file_blue' : 'folder_blue';

        return ReactDOM.createPortal(
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    marginTop: '50px',
                    marginLeft: '500px'
                }}
                onClick={this.props.onClose}
            >
                <div
                    style={{
                        height: '447px',
                        width: '316px',
                        padding: 20,
                        background: '#FFFFFF',
                        border: '1px solid rgba(221,224,228,0.70)',
                        boxShadow: `0 16px 64px 0 rgba(0,0,0,0.08)`,
                        borderRadius: '8px',
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >   
                    <div className="top" style={{ clear: 'both', marginBottom: '16px'}}>
                        <h3 style={{marginLeft: '90px', fontSize: '18px', color: '#2F363F', float:'left', fontFamily: '-apple-system'}}>Create New</h3>
                        <button onClick={this.props.onClose} style={{float: 'right', marginLeft: '68px', height: '24px', width:'24px', fontSize: '18px',background: 'none', border: 'none', outline: 'none'}}>X</button>
                    </div>
                    <div className="buttons">
                        <button className={"btn1"} onClick={e => this.handleOnClickFile(e)}>File</button>
                        <button className={"btn2"} onClick={e => this.handleOnClickFolder(e)}>Folder</button>
                    </div>
                    <div className="inputs">
                        <input
                            className="input"
                            type="text"
                            style={{ height: '40px', width: '220px', paddingLeft: '16px', borderRadius: '8px' }}
                            placeholder="Name"
                        />
                        <input
                            className="input"
                            type="text"
                            style={{ height: '40px', width: '220px', paddingLeft: '16px', borderRadius: '8px' }}
                            placeholder="Creator"
                        /> 
                        <input
                            className="input"
                            type="text"
                            style={{ height: '40px', width: '220px', paddingLeft: '16px', borderRadius: '8px' }}
                            placeholder="Size"
                        />  
                        <input
                            className="input"
                            type="text"
                            style={{ height: '40px', width: '220px', paddingLeft: '16px', borderRadius: '8px' }}
                            placeholder="Date"
                        /> 
                    </div>
                    <div className="create_button">
                        <button className="create">Create</button>
                    </div>
                </div>
            </div>,
            modalRoot,
        );
    }
}

// FileInfoPopup.propTypes = {
//     show: PropTypes.bool.isRequired,
//     handleClose: PropTypes.func.isRequired
// };

export default AddFileOrFolder;