import {
  ADMIN_LOGIN,
  LOGIN,
  LOGOUT_USER,
  REGISTER,
  RESEND_VERIFICATION_EMAIL,
  SET_ADMIN_LOGIN,
  SET_FIRST_LOGIN,
  SET_LOGIN,
  SET_TOKEN,
} from '@containers/Client/constants';

export const setLogin = (login) => ({
  type: SET_LOGIN,
  login,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const register = (data, callback) => ({
  type: REGISTER,
  data,
  callback,
});

export const resendVerificationEmail = (data) => ({
  type: RESEND_VERIFICATION_EMAIL,
  data,
});

export const login = (data, callback) => ({
  type: LOGIN,
  data,
  callback,
});

export const adminLogin = (data, callback) => ({
  type: ADMIN_LOGIN,
  data,
  callback,
});

export const setAdminLogin = (isAdminLogin) => ({
  type: SET_ADMIN_LOGIN,
  isAdminLogin,
});

export const setFirstLogin = (firstLogin) => ({
  type: SET_FIRST_LOGIN,
  firstLogin,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
