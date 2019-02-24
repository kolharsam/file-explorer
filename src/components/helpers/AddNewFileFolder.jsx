import React, {Component} from 'react';

import FileInfoPopup from './FileInfo';

class AddNewFileFolder extends Component {
    state = { showModal: false }
    handleShowMessageClick = () => this.setState({ showModal: true })
    handleCloseModal = () => this.setState({ showModal: false })

    render () {
        return (
            <React.Fragment>
                <div 
                    style={{
                        border: '2px #c4c4c4 dashed',
                        height: '113px',
                        width: '96px',
                        textAlign: 'center',
                        paddingTop: '28px',
                        fontSize: '42px',
                        color: '#c4c4c4',
                        borderRadius: '6px',
                        title: 'Add File or Create Folder',
                        cursor: 'pointer'
                    }}
                    onClick={this.handleShowMessageClick}
                >
                    +
                </div>
                {this.state.showModal ? (
                    <FileInfoPopup onClose={this.handleCloseModal.bind(this)}>
                        This is a message.
                    </FileInfoPopup>
                ) : null}
            </React.Fragment>
        );
    }
}

export default AddNewFileFolder;