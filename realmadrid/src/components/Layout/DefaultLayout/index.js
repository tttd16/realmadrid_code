import React, { Fragment } from 'react';

import Header from '~/components/Layout/Components/Header';

const DefaultLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div>{children}</div>
    </Fragment>
  );
};

export default DefaultLayout;
