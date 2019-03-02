import React, {Component} from 'react';

import '../../styles/fallback.css';

class Fallback extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="fallback">
                    Loading...
                </div>
            </React.Fragment>
        );
    }
}

export default Fallback;