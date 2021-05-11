import React, {Component} from 'react';
import './ModalSingIn.scss';

export default class ModalSingIn extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal__sing_in">
                <h2>Sing In</h2>
                <form className="content">
                    <div className="mb-1">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-1">
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control"
                           aria-describedby="passwordHelpBlock" />
                    </div>
                    <div className="mb-1 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
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