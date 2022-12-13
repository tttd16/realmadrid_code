import React from 'react';
import './index.css';

import AppStore from './AppStore';
import { StateProvider } from '~/context/StateProvider';
import { initialState } from '~/context/initalState';
import reducers from '~/context/reducers';

const StorePage = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <AppStore />
    </StateProvider>
  )
}

export default StorePage;

