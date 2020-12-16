import axios from 'axios';
import actions from './habbitActions';
import childOperations from '../children/childrenOperations'

const port = 'http://localhost:5000/';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZmQ4YzU1Zjk1YTVjYzU0YzBmMzlhOTEiLCJpYXQiOjE2MDgwNzQzMjEsImV4cCI6MTYwODI0NzEyMX0.8IlzZkOUR_jyFkRYhZsClzB2s_2fGBMIvUZ73IH2Um8';
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

const checkHabitDone = (id, data) => async dispatch => {
  dispatch(actions.checkHabbitRequest());
  try {
    await axios.patch(`${port}api/habits/${id}/check`, data).then(res => {
      dispatch(actions.checkHabbitSuccess(res.data));
      dispatch(childOperations.getAllChildren());
    });
  } catch (error) {
    dispatch(actions.checkHabbitError(error.message));
  }
}

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
  checkHabitDone,
  deleteHabit,
};
