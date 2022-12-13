import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';

import { useValue } from '~/context/UserAuthContext';

const GoogleOneTapLogin = () => {
  const { dispatch } = useValue();
  const [disabled, setDisabled] = useState(false);

  const handleResponse = (response) => {
    const token = response.credential;
    const decodedToken = jwtDecode(token);
    const { sub: id, email, name, picture: photoURL } = decodedToken;
    dispatch({ type: 'UPDATE_USER', payload: { id, email, name, photoURL, token, google: true } });
    dispatch({ type: 'CLOSE_LOGIN' });
  };

  const handleGoogleLogin = () => {
    setDisabled(true);
    try {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleResponse,
      });
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          throw new Error('Try to clear the cookies or try agian later!');
        }
        if (notification.isSkippedMoment() || notification.isDismissedMoment()) {
          setDisabled(false);
        }
      });
    } catch (error) {
      dispatch({ type: 'UPDATE_ALERT', payload: { open: true, severity: 'error', message: error.message } });
      console.log(error);
    }
  };

  return (
    <Button variant="outlined" startIcon={<Google />} disabled={disabled} onClick={handleGoogleLogin}>
      Login with Google
    </Button>
  );
};

export default GoogleOneTapLogin;
