import React, { Component } from "react";
import withToolShopApi from "../common/hoc/withToolShopApi";
import compose from "../common/utils/compose";
import GoodGridItem from "./GoodGridItem";
import Spinner from "../common/genericComponents/Spinner";
import ErrorIndicator from "../common/genericComponents/ErrorIndicator";
import { login } from "../app/App";
import "./GoodGrid.scss";

const GoodGrid = ({ goods, onAddedToCart }) => {
  return (
    <div id="grid">
      {goods.map((good) => {
        return (
          <div key={good.id}>
            <GoodGridItem
              good={good}
              onAddedToCart={() => onAddedToCart(good)}
            />
          </div>
        );
      })}
    </div>
  );
};

class GoodGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [],
      loading: true,
      error: false,
      quantity: [],
    };
    this.onAddedToCart = this.onAddedToCart.bind(this);
  }

  componentDidMount() {
    this.props.toolShopApi.getGoods().then((goods) => {
      this.setState({ ...this.state, goods: [...goods], loading: false });
    });
  }

  componentDidUpdate(prevProps) {}

  onAddedToCart(product) {
    const { toolShopApi, updateCartBlockHeader } = this.props;
    if (login) {
      toolShopApi.checkEmail(login).then(([user]) => {
        const { id, isLogged, cart, total } = user;
        let newCart = [...cart];
        let newTotal = total;
        if (typeof user != "undefined" && isLogged === true) {
          let good = cart.find((el) => el.id === product.id);
          const goodIndex = cart.findIndex((el) => el.id === product.id);
          if (good) {
            cart[goodIndex].quantity += 1;
          } else {
            product.quantity = 1;
            newCart = [...newCart, product];
          }
          newTotal += product.price;
          toolShopApi
            .patchData(id, { cart: newCart, total: newTotal })
            .then(({ cart, total }) => {
              updateCartBlockHeader(cart, total);
            });
        } else {
          alert("You are not logged in!");
        }
      });
    } else {
      alert("You are not logged in!");
    }
  }

  render() {
    const { goods, loading, error } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <GoodGrid goods={goods} onAddedToCart={this.onAddedToCart} />;
  }
}

export default compose(withToolShopApi())(GoodGridContainer);
