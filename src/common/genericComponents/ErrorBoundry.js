import React, { Component } from 'react';
import ErrorIndicator from './ErrorIndicator';

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.props.hasError) {
            return <ErrorIndicator />
        }

        return this.props.children;
    }
}