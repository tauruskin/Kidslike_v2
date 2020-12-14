import axios from 'axios';
import actions from './habbitActions';

const port = 'http://localhost:5005/';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZmQ2Yjc2NDA1NmUyZDM2NmNhZWMxZTUiLCJpYXQiOjE2MDc5MDczMDksImV4cCI6MTYwODA4MDEwOX0.33_nHnSAAnl-cLdwNj8rws3Obrcq3x733s_Fu9caLmA';
// axios.defaults.baseURL = 'http://kidslike-v2.top/';
// axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const getAllHabits = () => async dispatch => {
  dispatch(actions.getAllHabitsRequest());
  try {
    const response = await axios.get(`${port}api/habits/`);
    dispatch(actions.getAllHabitsSuccess(response.data));
  } catch (error) {
    dispatch(actions.getAllHabitsError(error));
  }
};

const addHabit = habit => async dispatch => {
  dispatch(actions.createHabbitRequest());
  try {
    // console.log(habit);
    const response = await axios.post(`${port}api/habits/`, { ...habit });
    dispatch(actions.createHabbitSuccess(response.data));
  } catch (error) {
    dispatch(actions.createHabbitError(error.message));
  }
};

const updateHabit = (data, id) => async dispatch => {
  dispatch(actions.updateHabbitRequest());
  try {
    await axios.patch(`${port}api/habits/${id}`, data).then(res => {
      dispatch(actions.updateHabbitSuccess(res.data));
    });
  } catch (error) {
    dispatch(actions.updateHabbitError(error.message));
  }
};

const deleteHabit = id => async dispatch => {
  dispatch(actions.deleteHabbitRequest());
  try {
    await axios.delete(`${port }api/habits/${id}`).then(() => {
      dispatch(actions.deleteHabbitSuccess(id));
    });
  } catch (error) {
    dispatch(actions.deleteHabbitError(error.message));
  }
};

export default {
  getAllHabits,
  addHabit,
  updateHabit,
  deleteHabit,
};
