import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../styles/searchbar.css';

class SearchBar extends Component {
    render () {
        return (
            <React.Fragment>
                <div style={{ border: '1px solid #DDE0E4', borderRadius: '8px', paddingLeft: '12px', paddingRight: '12px', position: 'fixed', marginLeft: '772px', marginTop: '-24px' }} className="searchbar">
                    <i className="fas fa-search" id="searchIcon" style={{ fontSize: '13px', color: '#AFB2B6', position: 'relative', opacity: '0.6'}}></i>
                    <input 
                        className="searchbar-input"
                        type="text"
                        style={{fontSize:'14px', height: '32px', width: '204px', paddingLeft: '8px', border: 'none', borderRadius: '8px', fontFamily: 'Lato', paddingTop:'-9px'}} 
                        onChange={this.props.handlechange}
                        value={this.props.searchtext}
                        placeholder="Search for anything"
                    />
                </div>
            </React.Fragment>
        );
    }
}

SearchBar.propTypes = {
    handlechange: PropTypes.func.isRequired,
    searchtext: PropTypes.string.isRequired
}

export default SearchBar;