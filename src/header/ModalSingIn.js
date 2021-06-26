import React, { Component } from "react";
import "./ModalSingIn.scss";

export default class ModalSingIn extends Component {
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
    const { caption, show, onSingIn, email, password, onClose } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className="modal__sing_in">
        <h2>{caption}</h2>
        <form className="content" onSubmit={onSingIn}>
          <div className="mb-1">
            <label htmlFor="inputEmailSingIn" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmailSingIn"
              aria-describedby="emailHelp"
              autoComplete="email"
              value={email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="inputPasswordSingIn" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPasswordSingIn"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              autoComplete="current-password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="mb-1 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkSingIn"
            />
            <label className="form-check-label" htmlFor="checkSingIn">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="actions">
          <button className="toggle-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
