import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import UserAuthContext from './context/UserAuthContext';
import Login from './components/Account/Login';
import Notification from './components/Notification';
import Loading from './components/Loading';

function App() {
  return (
    <UserAuthContext>
      <Router>
        <Loading />
        <Notification />
        <Login />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </UserAuthContext>
  );
}

export default App;
