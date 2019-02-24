import React, {Component} from 'react';
import DisplayLocation from './Location'
import SearchBar from '../helpers/SearchBar';

class Breadcrumbs extends Component {
    render () {
        return (
            <React.Fragment>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '24px', alignItems: 'baseline'}}>
                    <DisplayLocation />
                    <SearchBar />
                </div>
            </React.Fragment>
        );
    }
}

export default Breadcrumbs;