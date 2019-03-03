import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/delete_popup.css';

class DeletePopup extends React.Component {
    render () {
        return (
            this.props.show ? 
            (<React.Fragment>
                <div className="popup_delete">
                    <div className="popup_delete_inner">
                        <div className="top_delete">
                            <h4 className="heading_delete">Are you sure?</h4>
                            <button className="closeButton_delete" onClick={this.props.closePopup}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <hr className="separator" />
                        <div className="actions">
                            <button className="cancel" onClick={this.props.closePopup}>Cancel</button>
                            <button className="danger" onClick={this.props.closePopup}>Delete</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>)
            : null
        );
    }
}

DeletePopup.propTypes = {
    show: PropTypes.bool.isRequired,
    closePopup: PropTypes.func.isRequired,
};

export default DeletePopup;