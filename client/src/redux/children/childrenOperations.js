import axios from 'axios';
import {
  createChildrenRequest,
  createChildrenSuccess,
  createChildrenError,
  changeChildrenMarkRequest,
  changeChildrenMarkSuccess,
  changeChildrenMarkError,
  getAllChildrenRequest,
  getAllChildrenSuccess,
  getAllChildrenError,
} from './childrenActions';
const port = 'http://localhost:5000/';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZmQ3YzY0MzA1ZWIyMTUwYjAwMmRjNTYiLCJpYXQiOjE2MDc5Nzg2OTAsImV4cCI6MTYwODE1MTQ5MH0.MjiV-6iBMs-iOALSI7EmAvCaMR_UY5yiKelsSk2gmD4';
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const getAllChildren = () => async dispatch => {
  dispatch(getAllChildrenRequest());
  try {
    const response = await axios.get(`${port}api/childs/`);
    dispatch(getAllChildrenSuccess(response.data));
  } catch (error) {
    dispatch(getAllChildrenError(error));
  }
};

const addChildren = children => async dispatch => {
  dispatch(createChildrenRequest());
  try {
    console.log(children);
    const response = await axios.post(`${port}api/childs/`, { ...children });
    dispatch(createChildrenSuccess(response.data));
  } catch (error) {
    dispatch(createChildrenError(error.message));
  }
};

const updateChildren = (data, id) => async dispatch => {
  dispatch(changeChildrenMarkRequest());
  try {
    await axios.patch(`${port}api/childs/${id}`, data).then(res => {
      dispatch(changeChildrenMarkSuccess(res.data));
    });
  } catch (error) {
    dispatch(changeChildrenMarkError(error.message));
  }
};

export default {
  getAllChildren,
  addChildren,
  updateChildren,
};
