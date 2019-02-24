import React, {Component} from 'react';

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
                <input 
                    type="text" 
                    ref="searchText" 
                    style={{border: '1px solid #DDE0E4', borderRadius: '8px', height: '32px', width: '204px', backgroundImage: './search.png', paddingRight: '30px'}} 
                    onChange={(e) => {this.handleOnChange(e)}}
                    value={this.state.searchText}
                    placeholder="Search for anything"
                />
            </React.Fragment>
        );
    }
}

export default SearchBar;