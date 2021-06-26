import React from "react";
import "./shoppingCartTable.scss";

export default function ShoppingCartTable({
  items,
  total,
  onDelete,
  onIncrease,
  onDiminish,
}) {
  const renderRow = (item, idx) => {
    const { id, title, quantity, price } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>
          <button
            onClick={() => onDiminish(id)}
            className="btn btn-outline-warning btn-sm"
          >
            <i className="fa fa-minus-circle" />
          </button>
          {quantity}
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa fa-plus-circle" />
          </button>
        </td>
        <td>&euro; {price}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="table-responsive-sm cart__table">
      <h2>Your Order</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name of the book</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="cart__table_total">Total: &euro; {total}</div>
    </div>
  );
}
