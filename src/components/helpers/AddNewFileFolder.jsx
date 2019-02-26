import React, {Component} from 'react';

import AddFileOrFolder from './AddFileOrFolder';

class AddNewFileFolder extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
        this.handleShowMessageClick = this.handleShowMessageClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleShowMessageClick = (e) =>  {
        e.preventDefault(); 
        this.setState({ showModal: true });
    }
    handleCloseModal = (e) => {
        e.preventDefault();
        this.setState({ showModal: false });
    }

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
                {this.state.showModal ? <AddFileOrFolder onClose={(e) => this.handleCloseModal(e)} /> : null}
            </React.Fragment>
        );
    }
}

export default AddNewFileFolder;