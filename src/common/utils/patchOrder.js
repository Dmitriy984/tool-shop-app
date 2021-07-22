export function patchOrder(
  id,
  api,
  cart,
  total,
  currentOrders,
  totalOrders,
  currentOrderNumbers,
  currentOrderDates
) {
  api
    .patchData(id, {
      currentOrders,
      totalOrders,
      cart,
      total,
      currentOrderNumbers,
      currentOrderDates
    });
}
