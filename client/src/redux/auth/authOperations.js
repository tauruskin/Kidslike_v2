import axios from 'axios';
import authAction from './authActions';

// axios.defaults.baseURL = 'http://kidslike-v2.top/';
axios.defaults.baseURL = 'http://localhost:5000/';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `${token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');

export const signIn = userData => dispatch => {
  dispatch(authAction.signinRequest());
  axios
    .post('api/auth/signIn', userData)
    .then(response => {
      setToken(response.data.token);
      dispatch(authAction.signinSuccess(response.data));
    })
    .catch(error => {
      dispatch(authAction.signInError(error.message));
    });
};

export const signUp = userData => dispatch => {
  dispatch(authAction.signupRequest());
  axios
    .post('api/auth/signUp', userData)
    .catch(error => console.log(error));
};

export const signOut = () => dispatch => {
  clearToken();
  dispatch(authAction.signOutSuccess());
};

export default {
  setToken,
};
