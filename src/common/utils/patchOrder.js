export function patchOrder(
  id,
  api,
  cart,
  total,
  currentOrders,
  totalOrders,
  currentOrderNumbers,
  currentOrderDates,
  htmlPage
) {
  api
    .patchData(id, {
      currentOrders,
      totalOrders,
      cart,
      total,
      currentOrderNumbers,
      currentOrderDates,
    })
    .then((data) => {
      if (cart.length === 0 && htmlPage != null) {
        window.location.href = htmlPage;
      }
    });
}
