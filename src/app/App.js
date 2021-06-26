import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import OrderDetailsPage from "../pages/OrderDetailsPage";
import ModalSingIn from "../header/ModalSingIn";
import ModalSingUp from "../header/ModalSingUp";
import { deleteCookie, readCookie } from "../common/utils/helpers";
import compose from "../common/utils/compose";
import withToolShopApi from "../common/hoc/withToolShopApi";
import "./App.scss";

export const login = readCookie("email");

class App extends Component {
  state = {
    userId: 0,
    showSingIn: false,
    showSingUp: false,
    isLoggedIn: false,
    numItems: 0,
    total: 0,
    emailSinIn: "",
    passwordSinIn: "",
    emailSingUp: "",
    passwordSingUp: "",
    login: "",
  };

  componentDidMount() {
    if (login) {
      this.props.toolShopApi.checkEmail(login).then(([user]) => {
        const { id, email, isLogged, cart, total } = user;
        if (typeof user != "undefined" && isLogged === true) {
          this.setState({ userId: id });
          this.setState({ isLoggedIn: true });
          this.setState({ numItems: cart.length });
          this.setState({ total: total });
          this.setState({ login: email });
        }
      });
    }
  }

  showModalSingIn = () => {
    this.setState({
      showSingUp: false,
      showSingIn: true,
    });
  };

  closeModalSingIn = () => {
    this.setState({
      showSingIn: false,
    });
  };

  showModalSingUp = () => {
    this.setState({
      showSingIn: false,
      showSingUp: true,
    });
  };

  closeModalSingUp = () => {
    this.setState({
      showSingUp: false,
    });
  };

  onEmailSingInChange = (emailSingIn) => {
    this.setState({ emailSingIn });
  };

  onPasswordSingInChange = (passwordSingIn) => {
    this.setState({ passwordSingIn });
  };

  onEmailSingUpChange = (emailSingUp) => {
    this.setState({ emailSingUp });
  };

  onPasswordSingUpChange = (passwordSingUp) => {
    this.setState({ passwordSingUp });
  };

  onSingIn = (e) => {
    e.preventDefault();
    let enteredEmail = this.state.emailSingIn;
    let enteredPassword = this.state.passwordSingIn;

    if (enteredEmail === "" || enteredPassword === "") {
      alert("Fill in the fields");
      return false;
    }

    this.props.toolShopApi.checkEmail(enteredEmail).then(([user]) => {
      if (typeof user == "undefined") {
        alert("User with this E-mail does not exist");
      } else {
        const { id, email, password, cart, total } = user;
        if (password === enteredPassword) {
          this.props.toolShopApi.patchData(id, { isLogged: true }).then(() => {
            this.setState({
              userId: id,
              showSingIn: false,
              isLoggedIn: true,
              numItems: cart.length,
              total: total,
              emailSingIn: "",
              passwordSingIn: "",
              login: email,
            });
            document.cookie = `email=${email}`;
          });
        } else {
          alert("Wrong password entered");
        }
      }
    });
  };

  onSingUp = (e) => {
    e.preventDefault();
    let email = this.state.emailSingUp;
    let password = this.state.passwordSingUp;

    if (email === "" || password === "") {
      alert("Fill in the fields");
      return false;
    }

    let newUser = {
      id: Date.now(),
      email,
      password,
      cart: [],
      currentOrders: [],
      completedOrders: [],
      totalOrders: [],
      total: 0,
      isLogged: false,
    };

    this.props.toolShopApi.checkEmail(email).then(([user]) => {
      if (user && user.email === email) {
        alert("User with this E-mail does exist");
      } else {
        this.props.toolShopApi.postUserData(newUser).then((user) => {
          this.setState({
            showSingUp: false,
            emailSingUp: "",
            passwordSingUp: "",
          });
          alert(
            `You are registered! Sign in to your account using your email ${user.email}`
          );
        });
      }
    });
  };

  onSingOut = () => {
    this.props.toolShopApi
      .patchData(this.state.userId, { isLogged: false })
      .then(() => {
        this.setState({
          userId: 0,
          isLoggedIn: false,
          numItems: 0,
          total: 0,
          login: "",
        });
        deleteCookie("email");
      });
  };

  updateCartBlockHeader = (cart, total) => {
    this.setState({
      numItems: cart.length,
      total: total,
    });
  };

  render() {
    const {
      showSingIn,
      showSingUp,
      isLoggedIn,
      numItems,
      total,
      emailSingIn,
      passwordSingIn,
      emailSingUp,
      passwordSingUp,
      login,
    } = this.state;
    return (
      <div id="page">
        <Header
          numItems={numItems}
          total={total}
          showModalSingIn={this.showModalSingIn}
          showModalSingUp={this.showModalSingUp}
          isLoggedIn={isLoggedIn}
          onSingOut={this.onSingOut}
          login={login}
        />
        <nav>Navigation</nav>
        <main>
          <ModalSingIn
            caption="Sing In"
            onClose={this.closeModalSingIn}
            show={showSingIn}
            email={emailSingIn}
            password={passwordSingIn}
            onEmailChange={this.onEmailSingInChange}
            onPasswordChange={this.onPasswordSingInChange}
            onSingIn={this.onSingIn}
          />
          <ModalSingUp
            caption="Sing Up"
            onClose={this.closeModalSingUp}
            show={showSingUp}
            email={emailSingUp}
            password={passwordSingUp}
            onEmailChange={this.onEmailSingUpChange}
            onPasswordChange={this.onPasswordSingUpChange}
            onSingUp={this.onSingUp}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage updateCartBlockHeader={this.updateCartBlockHeader} />
              )}
            />
            <Route
              path="/cart"
              render={() => (
                <CartPage
                  numItems={numItems}
                  total={total}
                  updateCartBlockHeader={this.updateCartBlockHeader}
                />
              )}
            />
            <Route path="/orders" component={OrderPage} />
            <Route path="/order-details" component={OrderDetailsPage} />
          </Switch>
        </main>
        <footer>
          <p>
            <small>© 2021 TOOL SHOP — Terms of Service</small>
          </p>
        </footer>
      </div>
    );
  }
}

export default compose(withToolShopApi())(App);
