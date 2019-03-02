import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/banner.css';

class Banner extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.text !== '' 
                    ? 
                        <div className="banner">
                            No Result found for&nbsp;<span className="query">{this.props.text}</span>
                        </div> 
                    : 
                        null
                }
            </React.Fragment>
        );
    }
}

Banner.propTypes = {
    text: PropTypes.string,
}

export default Banner;