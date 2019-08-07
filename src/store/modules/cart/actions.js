export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountRequest(id, addOrSub) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    addOrSub,
  };
}

export function updateAmountSuccess(id, addOrSub) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    addOrSub,
  };
}
