import React, {Component} from 'react';
import './ModalSingUp.scss';

export default class ModalSingUp extends Component {
    render() {
        const { caption } = this.props;

        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal__sing-up">
                <h2>{caption}</h2>
                <form className="content">
                    <div className="mb-1">
                        <label htmlFor="inputEmailSingUp" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="inputEmailSingUp" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="inputPasswordSingUp" className="form-label">Password</label>
                        <input type="password" id="inputPasswordSingUp" className="form-control"
                               aria-describedby="passwordHelpBlock" />
                    </div>
                    <div className="mb-1 form-check">
                        <input type="checkbox" className="form-check-input" id="checkSingUp" />
                        <label className="form-check-label" htmlFor="checkSingUp">Check me out</label>
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