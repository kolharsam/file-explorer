import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../styles/searchbar.css';

class SearchBar extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="searchbar">
                    <i className="fas fa-search" id="searchIcon"></i>
                    <input 
                        className="searchbar-input"
                        type="text"
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