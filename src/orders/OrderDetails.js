import React, { Component } from "react";
import compose from "../common/utils/compose";
import withToolShopApi from "../common/hoc/withToolShopApi";
import { login } from "../app/App";
import { patchOrder } from "../common/utils/patchOrder";
import history from "../history";
import "./OrderDetails.scss";

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      cart: [],
      total: 0,
      order: [],
      totalOrder: 0,
      orderNumber: 0,
      orders: [],
      orderNumbers: [],
      totalOrders: [],
      orderDates: [],
      orderIndex: null,
    };
    this.removeOrder = this.removeOrder.bind(this);
  }

  componentDidMount() {
    if (login) {
      this.props.toolShopApi.checkEmail(login).then(([user]) => {
        if (typeof user !== "undefined" && user.isLogged === true) {
          const {
            id,
            cart,
            total,
            currentOrders,
            currentOrderNumbers,
            totalOrders,
            currentOrderDates,
          } = user;
          const orderNumber = +window.location.hash.substr(1);
          const orderIndex = currentOrderNumbers.findIndex(
            (num) => num === orderNumber
          );
          this.setState({
            id,
            cart,
            total,
            order: currentOrders[orderIndex],
            totalOrder: totalOrders[orderIndex],
            orderNumber,
            orders: currentOrders,
            orderNumbers: currentOrderNumbers,
            totalOrders,
            orderDates: currentOrderDates,
            orderIndex,
          });
        }
      });
    }
  }

  removeOrder(
    orderIndex,
    id,
    cart,
    total,
    orders,
    totalOrders,
    orderNumbers,
    orderDates
  ) {
    function updateOrdersDetails(details) {
      return [
        ...details.slice(0, orderIndex),
        ...details.slice(orderIndex + 1),
      ];
    }

    patchOrder(
      id,
      this.props.toolShopApi,
      cart,
      total,
      updateOrdersDetails(orders),
      updateOrdersDetails(totalOrders),
      updateOrdersDetails(orderNumbers),
      updateOrdersDetails(orderDates)
    );
  }

  render() {
    const {
      id,
      cart,
      total,
      order,
      totalOrder,
      orderNumber,
      orders,
      orderNumbers,
      totalOrders,
      orderDates,
      orderIndex,
    } = this.state;
    const renderRow = (item, idx) => {
      const { id, title, quantity, price } = item;
      return (
        <tr key={id}>
          <td>{idx + 1}</td>
          <td>{title}</td>
          <td>&euro;{price}</td>
          <td>{quantity}</td>
          <td>&euro;{price * quantity}</td>
        </tr>
      );
    };
    return (
      <div className="order__details">
        <h2 className="order__details_title">Order {orderNumber}</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total coast</th>
            </tr>
          </thead>
          <tbody>{order.map(renderRow)}</tbody>
        </table>
        <div className="order__details_total">Total: &euro;{totalOrder}</div>
        <button
          className="btn btn-primary order__details_btn"
          onClick={() => {
            this.removeOrder(
              orderIndex,
              id,
              cart,
              total,
              orders,
              totalOrders,
              orderNumbers,
              orderDates
            );
            history.goBack();
            }
          }
        >
          Cancel the order
        </button>
      </div>
    );
  }
}

export default compose(withToolShopApi())(OrderDetails);
