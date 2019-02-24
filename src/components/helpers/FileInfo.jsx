import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
//import Octicon, {X} from '@githubprimer/octicons-react';

const modalRoot = document.getElementById('modal-root');

class FileInfoPopup extends Component {
    render() {
        return ReactDOM.createPortal(
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    display: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30px'
                }}
                onClick={this.props.onClose}
            >
                <div
                    style={{
                        padding: 20,
                        background: '#fff',
                        borderRadius: '2px',
                        display: 'inline-block',
                        minHeight: '447px',
                        margin: '1rem',
                        position: 'relative',
                        minWidth: '316px',
                        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                        justifySelf: 'center',
                    }}
                >   
                    <div className="top" style={{ clear: 'both', marginBottom: '20px'}}>
                        <h3 style={{marginLeft: '124px', fontSize: '18px', color: '#2F363F', float:'left'}}>File Info</h3>
                        <button onClick={this.props.onClose} style={{float: 'right', marginLeft: '78px', height: '24px', width:'24px', fontSize: '18px', backgroundColor: '#ffffff'}}>X</button>
                    </div>
                    {this.props.children}
                </div>
            </div>,
            modalRoot,
        )
    }
}

// FileInfoPopup.propTypes = {
//     show: PropTypes.bool.isRequired,
//     handleClose: PropTypes.func.isRequired
// };

export default FileInfoPopup;