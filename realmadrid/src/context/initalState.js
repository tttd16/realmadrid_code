import { fetchCart, fetchUser } from '../utils/fetchLocalStorageData';

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  shopItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
