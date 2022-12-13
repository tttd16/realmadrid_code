import React, { Fragment } from 'react';

import Header from '~/components/Layout/Components/Header';
import Footer from '~/components/Layout/Components/Footer';

const HeaderFooterOnly = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default HeaderFooterOnly;
