import axios from 'axios';
import authAction from './authActions';

axios.defaults.baseURL = 'http://kidslike-v2.top/';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `${token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');
const signIn = userData => dispatch => {
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

const signUp = userData => dispatch => {
  dispatch(authAction.signUputRequest());

  axios
    .post('api/auth/signUp', userData)
    .then(response => {
      axios
        .post('api/auth/signUp', userData)
        .then(response => {
          setToken(response.data.access_token);
          dispatch(authAction.signInSuccess(response.data));
        })
        .catch(er => console.log(er));
      dispatch(authAction.signUpSuccess(response.data));
    })
    .catch(error => dispatch(authAction.signUpError(error)));
};

const signOut = () => dispatch => {
  clearToken();
  dispatch(authAction.signOutSuccess());
};

export default {
  signUp,
  signIn,
  signOut,
  setToken,
};
