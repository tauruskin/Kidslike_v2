import axios from 'axios';
import actions from './userActions';

const getUserInfo = () => async dispatch => {
  dispatch(actions.getUserInfoRequest());
  try {
    console.log('try');
    // const response = await axios.get('/users/current');
    // dispatch(actions.getUserInfoSuccess(response.data));
  } catch (error) {
    dispatch(actions.getUserInfoError(error.message));
  }
};

export default { getUserInfo };
