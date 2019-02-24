import React, {Component} from 'react';

import '../../styles/searchbar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        e.preventDefault();

        this.setState({searchText: e.target.value}, () => {
            console.log(this.state.searchText);
        });
    }

    render () {
        return (
            <React.Fragment>
                    <i class="fas fa-search" id="searchIcon"></i>
                    <input 
                        type="text"
                        style={{ border: '1px solid #DDE0E4', borderRadius: '8px', height: '32px', width: '204px', paddingLeft: '17px'}} 
                        onChange={(e) => {this.handleOnChange(e)}}
                        value={this.state.searchText}
                        placeholder="Search for anything"
                    />
            </React.Fragment>
        );
    }
}

export default SearchBar;