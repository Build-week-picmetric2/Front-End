import React, {Component} from 'react';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}
            </div>
        );
    }
}