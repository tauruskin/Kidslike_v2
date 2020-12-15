import axios from 'axios';
import actions from './habbitActions';

const domain = process.env.DOMAIN_ADDRESS;
//todo token
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZmQ3YzY0MzA1ZWIyMTUwYjAwMmRjNTYiLCJpYXQiOjE2MDc5Nzg2OTAsImV4cCI6MTYwODE1MTQ5MH0.MjiV-6iBMs-iOALSI7EmAvCaMR_UY5yiKelsSk2gmD4';
// axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const getAllHabits = () => async dispatch => {
  dispatch(actions.getAllHabitsRequest());
  try {
    const response = await axios.get(`${domain}/api/habits/`);
    dispatch(actions.getAllHabitsSuccess(response.data));
  } catch (error) {
    dispatch(actions.getAllHabitsError(error));
  }
};

const addHabit = habit => async dispatch => {
  dispatch(actions.createHabbitRequest());
  try {
    // console.log(habit);
    const response = await axios.post(`${domain}/api/habits/`, { ...habit });
    dispatch(actions.createHabbitSuccess(response.data));
  } catch (error) {
    dispatch(actions.createHabbitError(error.message));
  }
};

const updateHabit = (data, id) => async dispatch => {
  dispatch(actions.updateHabbitRequest());
  try {
    await axios.patch(`${domain}/api/habits/${id}`, data).then(res => {
      dispatch(actions.updateHabbitSuccess(res.data));
    });
  } catch (error) {
    dispatch(actions.updateHabbitError(error.message));
  }
};

const checkHabitDone = (id, data) => async dispatch => {
  dispatch(actions.checkHabbitRequest());
  try {
    await axios.patch(`${domain}/api/habits/${id}/check`, data).then(res => {
      dispatch(actions.checkHabbitSuccess(res.data));
    });
  } catch (error) {
    dispatch(actions.checkHabbitError(error.message));
  }
};

const deleteHabit = id => async dispatch => {
  dispatch(actions.deleteHabbitRequest());
  try {
    await axios.delete(`${domain}/api/habits/${id}`).then(() => {
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
