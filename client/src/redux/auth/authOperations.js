import axios from 'axios';
import authAction from './authActions';

// const headers = {
//   'Content-Type': 'application/json',
//   'X-Custom-Header': 'custom value',
// };

// axios.defaults.baseURL = 'http://kidslike-v2.top/';
axios.defaults.baseURL = 'http://localhost:5000/';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `${token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');

export const signIn = userData => dispatch => {
  dispatch(authAction.signInRequest());

  axios
    .post('api/auth/signIn', userData)
    .then(response => {
      setToken(response.data.access_token);
      dispatch(authAction.signInSuccess(response.data));
    })
    .catch(error => {
      dispatch(authAction.signInError(error.message));
    });
};

export const signUp = userData => async dispatch => {
  dispatch(authAction.signupRequest());
  await axios
    .post('api/auth/signUp', userData)
    .then(response => {
      console.log('response', response);
      // axios
      //   .post('api/auth/signUp', userData)
      //   .then(response => {
      //     setToken(response.data.access_token);
      //     dispatch(authAction.signInSuccess(response.data));
      //   })
      //   .catch(er => console.log(er));
      // dispatch(authAction.signUpSuccess(response.data));
    })
    // .catch(error => dispatch(authAction.signUpError(error)));
    .catch(error => console.log(error));
};

export const signOut = () => dispatch => {
  clearToken();
  dispatch(authAction.signOutSuccess());
};

export default {
  setToken,
};
