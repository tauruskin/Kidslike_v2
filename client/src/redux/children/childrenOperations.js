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
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZmQ2Yjc2NDA1NmUyZDM2NmNhZWMxZTUiLCJpYXQiOjE2MDc5MDczMDksImV4cCI6MTYwODA4MDEwOX0.33_nHnSAAnl-cLdwNj8rws3Obrcq3x733s_Fu9caLmA';
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
