import React, {Component} from 'react';
import DisplayLocation from './Location'

class Breadcrumbs extends Component {
    render () {
        return (
            <React.Fragment>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '24px', alignItems: 'baseline'}}>
                    <DisplayLocation />
                </div>
            </React.Fragment>
        );
    }
}

export default Breadcrumbs;