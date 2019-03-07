import React from 'react';
import AddFileOrFolder from './AddFileOrFolderPopup';

import addImage from '../../images/addFileOrFolder.png';

import '../../styles/fileorfolder.css'

class AddNewFileFolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
        
        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup() {
        this.setState(
            {
                showPopup: !this.state.showPopup
            },
            () => {
                console.log(`changed the state to ` + this.state.showPopup);
            }
        );
    }

    render() {
        return (
            <div className="app">
                <img style={{cursor: 'pointer', zIndex: '-1', marginTop: '5px'}} src={addImage} alt="" onClick={this.togglePopup} />
                {this.state.showPopup ? (
                    <AddFileOrFolder closePopup={this.togglePopup} files={this.props.files} />
                ) : null}
            </div>
        );
    }
}

export default AddNewFileFolder;