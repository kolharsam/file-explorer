import React, {Component} from 'react';
import DisplayLocation from './Location'

class Breadcrumbs extends Component {
    render () {
        return (
            <React.Fragment>
                <DisplayLocation />
            </React.Fragment>
        );
    }
}

export default Breadcrumbs;