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
                <div style={{ border: '1px solid #DDE0E4', borderRadius: '8px', paddingLeft: '12px', paddingRight: '12px', position:'fixed', marginLeft: '772px', marginTop:'24px'}}>
                    <i className="fas fa-search" id="searchIcon" style={{ fontSize: '13px', color: '#AFB2B6', position: 'relative', opacity: '0.6'}}></i>
                    <input 
                        type="text"
                        style={{fontSize:'14px', height: '32px', width: '204px', paddingLeft: '8px', border: 'none', borderRadius: '8px', fontFamily: 'Lato', paddingTop:'-9px'}} 
                        onChange={(e) => {this.handleOnChange(e)}}
                        value={this.state.searchText}
                        placeholder="Search for anything"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;