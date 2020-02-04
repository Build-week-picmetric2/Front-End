import React, {Component} from 'react';
import Register from './components/register';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Register />
            </div>
        )
    }
}