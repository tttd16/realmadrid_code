import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// import Checkout from './Checkout';
import CreateContainer from './CreateContainer';
import Header from './Header';
import MainContainer from './MainContainer';

import { useStateValue } from '~/context/StateProvider';
import { getAllShopItems } from '~/utils/firebaseFunctions';
import { actionType } from '~/context/reducers';

const AppStore = () => {
  const [{ shopItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllShopItems().then((data) => {
      dispatch({
        type: actionType.SET_SHOP_ITEMS,
        shopItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [{ user, cartShow, cartItems }] = useStateValue();

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-white">
        <Header />

        <main className="px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            {/* <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/Checkout" element={<Checkout />} /> */}
          </Routes>
        </main>
        {user && user.email === 'tiendung.work16@gmail.com' && <CreateContainer />}
      </div>
    </AnimatePresence>
  );
};

export default AppStore;
