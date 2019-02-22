import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';

import './breadcrumbs.css';

class CurrentPageLocation extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            path: props.location.pathname,
            listItems: [],
            topLink: ''
        }
        
        this.listAndLinkMaker = this.listAndLinkMaker.bind(this);
        
        this.root = (<div className='list-item' key='0'><Link to='/' style={{ textDecoration: 'none', color: '#81878C'}}>root</Link></div>)
    }

    listAndLinkMaker() {
        let path = this.state.path.toString().split("/");
        path.shift();

        this.setState({listItems: [...path]});
        
        // this part of the top-link for the arrow next to the breadcrumbs.
        let topLink = '/';

        if (path[path.length - 1] === '') {  // bug fix for nested routes.
            path.pop();
            path.pop();
        } else {
            path.pop();
        }
        
        if (path.length !== 0) {
            path.forEach((link) => {
                topLink += link;
                topLink += '/'
            });
        }

        this.setState({topLink: topLink});
    }

    componentWillMount() {
        // Just so that I have the links to be present before the render()
        this.listAndLinkMaker();
    }

    render() {
        //const { match, history, location } = this.props;
        return (
            <React.Fragment>
                <div className="overall">
                    <div className="top-link">
                        <Link to={this.state.topLink}>
                            <i className="fa fa-arrow-circle-up" style={{ marginTop: '26.9px', marginLeft: '41.9px', fontSize: '24px', color: '#2F363F'}}></i>
                        </Link>
                    </div>
                    <div className="breadcrumb">
                        {this.root}
                        {this.state.listItems.map((location, index) => {
                            return (
                                <div className="list-item" key={index}>
                                    <Link to={"/" + location} style={{ textDecoration: 'none', color: '#81878C'}}>{location}</Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const DisplayLocation = withRouter(CurrentPageLocation);

export default DisplayLocation;