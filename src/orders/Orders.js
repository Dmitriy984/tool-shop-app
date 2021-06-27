import React, { Component } from "react";
import compose from "../common/utils/compose";
import withToolShopApi from "../common/hoc/withToolShopApi";
import { login } from "../app/App";
import { Link } from "react-router-dom";
import "./Orders.scss";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      orderNumbers: [],
      orderDates: [],
      totalOrders: [],
    };
  }

  componentDidMount() {
    if (login) {
      this.props.toolShopApi.checkEmail(login).then(([user]) => {
        if (typeof user !== "undefined" && user.isLogged === true) {
          const {
            currentOrders,
            currentOrderNumbers,
            currentOrderDates,
            totalOrders,
          } = user;
          this.setState({
            orders: currentOrders,
            orderNumbers: currentOrderNumbers,
            orderDates: currentOrderDates,
            totalOrders,
          });
        }
      });
    }
  }

  render() {
    const { orders, orderNumbers, orderDates, totalOrders } = this.state;
    if (orders.length === 0) {
      return <h1>No Orders</h1>;
    }

    return (
      <div className="order__blocks">
        <p className="order__blocks_title">Orders</p>
        <div>
          {orders.map((order, idx) => {
            return (
              <div key={orderNumbers[idx]} className="order__grid">
                <Link to={`/order-details#${orderNumbers[idx]}`}>
                  <div
                    className="order__grid_number"
                  >
                    <span>
                      {`Order ${orderNumbers[idx]} from ${orderDates[idx]}`}
                    </span>
                    <span className="order__blocks_total">
                      Total: &euro;{`${totalOrders[idx]}`}
                    </span>
                  </div>
                </Link>
                <div className="order__grid_list">
                  {order.map((item) => item.title).join(",  ")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default compose(withToolShopApi())(Orders);
