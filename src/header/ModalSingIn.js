import React, {Component} from 'react';
import './ModalSingIn.scss';

export default class ModalSingIn extends Component {
    render() {
        const { caption } = this.props;

        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal__sing_in">
                <h2>{caption}</h2>
                <form className="content">
                    <div className="mb-1">
                        <label htmlFor="inputEmailSingIn" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="inputEmailSingIn" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-1">
                    <label htmlFor="inputPasswordSingIn" className="form-label">Password</label>
                    <input type="password" id="inputPasswordSingIn" className="form-control"
                           aria-describedby="passwordHelpBlock" />
                    </div>
                    <div className="mb-1 form-check">
                        <input type="checkbox" className="form-check-input" id="check1SingIn" />
                            <label className="form-check-label" htmlFor="check1SingIn">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="actions">
                    <button className="toggle-button"
                        onClick={e => this.props.onClose(e)}
                    >
                        Close
                    </button>
                </div>
            </div>
        )
    }
}