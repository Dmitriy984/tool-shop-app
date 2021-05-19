import React, {Component} from 'react';
import './ModalSingUp.scss';

export default class ModalSingUp extends Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e) {
        this.props.onEmailChange(e.target.value);
    }

    handlePasswordChange(e) {
        this.props.onPasswordChange(e.target.value);
    }

    render() {
        const { caption, show, onSingUp, email, password, onClose } = this.props;

        if (!show) {
            return null;
        }

        return (
            <div className="modal__sing-up">
                <h2>{caption}</h2>
                <form
                    className="content"
                    onSubmit={onSingUp}
                >
                    <div className="mb-1">
                        <label htmlFor="inputEmailSingUp" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmailSingUp"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={this.handleEmailChange}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="inputPasswordSingUp" className="form-label">Password</label>
                        <input
                            type="password"
                            id="inputPasswordSingUp"
                            className="form-control"
                            aria-describedby="passwordHelpBlock"
                            value={password}
                            onChange={this.handlePasswordChange}
                        />
                    </div>
                    <div className="mb-1 form-check">
                        <input type="checkbox" className="form-check-input" id="checkSingUp" />
                        <label className="form-check-label" htmlFor="checkSingUp">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="actions">
                    <button className="toggle-button"
                            onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        )
    }
}