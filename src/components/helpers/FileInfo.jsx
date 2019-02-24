import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Octicon, {X} from '@githubprimer/octicons-react';

import '../../styles/file-info.css';

// class App extends React.Component {
//     state = { show: false }

//     showModal = () => {
//         this.setState({ show: true });
//     }

//     hideModal = () => {
//         this.setState({ show: false });
//     }

//     render() {
//         return (
//             <main>
//                 <h1>React Modal</h1>
//                 <Modal show={this.state.show} handleClose={this.hideModal} >
//                     <p>Modal</p>
//                     <p>Data</p>
//                 </Modal>
//                 <button type='button' onClick={this.showModal}>Open</button>
//             </main>
//         )
//     }
// }

class FileInfoPopup extends Component {
    constructor(props) {
        super(props);
        this.showOrHide = this.props.show ? 'file-info-popup display' : 'file-info-popup hide';
    }
    
    render() {
        return (
            <React.Fragment>
                <div className={this.showOrHide}>
                    <section className='file-info-popup-main'>
                        <span className="top">
                            <span className="inner-text">
                                File Info
                            </span>
                            <span className="close-button" onClick={this.props.handleClose}>
                                <Octicon icon={X} width={24} height={24} />
                            </span>
                        </span>
                        {this.props.children}
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

FileInfoPopup.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default FileInfoPopup;