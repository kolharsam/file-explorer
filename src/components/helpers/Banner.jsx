import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/banner.css';

class Banner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="banner">
                    No Result found for <span className="query">{this.props.text}</span>.
                </div>
            </React.Fragment>
        );
    }
}

Banner.propTypes = {
    text: PropTypes.string,
}

export default Banner;