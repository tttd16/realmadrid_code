import React, { useEffect, useRef, useState } from 'react';
import { Close, Send } from '@mui/icons-material';
import {
  Dialog,
  DialogContent,
  IconButton,
  DialogContentText,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';


import { useValue } from '~/context/UserAuthContext';
import PasswordFiled from './PasswordFiled';
import GoogleOneTapLogin from './GoogleOneTapLogin';
import { login, register } from '~/actions/UserAction';

const Login = () => {
  const {
    state: { openLogin },
    dispatch,
  } = useValue();
  const [title, setTitle] = useState('Login');
  const [isRegister, setIsRegister] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleClose = () => {
    dispatch({ type: 'CLOSE_LOGIN' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // send Login request if it is not register and return
    if (!isRegister) return login({ email, password }, dispatch);

    const name = nameRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword)
      return dispatch({
        type: 'UPDATE_ALERT',
        payload: { open: true, severity: 'error', message: 'Passwords do not match' },
      });
    register({ name, email, password }, dispatch);
  };

  useEffect(() => {
    isRegister ? setTitle('Register') : setTitle('Login');
  }, [isRegister]);

  return (
    <Dialog open={openLogin} onClose={handleClose}>
      <DialogTitle
        sx={{
          borderBottom: '1px solid #ccc',
        }}
      >
        {title}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>Please fill your information in the fields below:</DialogContentText>
          {isRegister && (
            <TextField
              autoFocus
              margin="normal"
              variant="standard"
              id="name"
              label="Name"
              type="text"
              fullWidth
              inputRef={nameRef}
              inputProps={{ minLength: 2 }}
              required
            />
          )}
          <TextField
            autoFocus={!isRegister}
            margin="normal"
            variant="standard"
            id="email"
            label="Email"
            type="email"
            fullWidth
            inputRef={emailRef}
            required
          />

          <PasswordFiled {...{ passwordRef }} />
          {isRegister && (
            <PasswordFiled passwordRef={confirmPasswordRef} id="confirmPassword" label="Confirm Password" />
          )}
        </DialogContent>
        <DialogActions sx={{ px: '24px' }}>
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Submit
          </Button>
        </DialogActions>
      </form>
      <DialogActions sx={{ justifyContent: 'left', p: '5px 24px' }}>
        {isRegister ? 'Do you have account? Sign in now' : "Don't you have an account? Create one now"}
        <Button onClick={() => setIsRegister(!isRegister)}>{isRegister ? 'Login' : 'Register'}</Button>
      </DialogActions>
      <DialogActions sx={{ justifyContent: 'center', py: '24px' }}>
        <GoogleOneTapLogin />
      </DialogActions>
    </Dialog>
  );
};

export default Login;
