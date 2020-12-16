import axios from 'axios';
import authAction from './authActions';

export const setToken = token =>
  (axios.defaults.headers.common['Authorization'] = token);

export const clearToken = () =>
  (axios.defaults.headers.common['Authorization'] = '');

export const signIn = userData => dispatch => {
  dispatch(authAction.signinRequest());
  axios
    .post('/api/auth/signIn', userData)
    .then(response => {
      setToken(response.data.token);
      // localStorage.setItem('token', response.data.token)
      dispatch(authAction.signinSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      // dispatch(authAction.signInError(error.message));
    });
};

export const signUp = userData => dispatch => {
  dispatch(authAction.signupRequest());
  axios.post('/api/auth/signUp', userData).catch(error => console.log(error));
};

// export const signOut = () => dispatch => {
//   clearToken();
//   dispatch(authAction.signOutSuccess());
// };

export const logout = token => dispatch => {
  dispatch(authAction.signoutRequest());
  axios
    .delete('/api/auth/signOut', token)
    .then(() => {
      dispatch(authAction.signoutSuccess());
    })
    .catch(err => dispatch(authAction.signoutError(err)))
    .finally(clearToken());
};
