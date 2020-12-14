import axios from 'axios';
import actions from './habbitActions';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZmQ2MDg2NzNlYzkwNjJiMThjYzI4MjEiLCJpYXQiOjE2MDc4ODU1ODAsImV4cCI6MTYwODA1ODM4MH0.-pM6Ue5CTAUpu0BcYmUevUl67pxLgMi5_MmUc8TkO8Y'
// axios.defaults.baseURL = 'http://kidslike-v2.top/';
// axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }


const getAllHabits = () => async dispatch => {
    dispatch(actions.getAllHabitsRequest());
    try {
        const response = await axios.get('http://localhost:5000/api/habits/');
        dispatch(actions.getAllHabitsSuccess(response.data));
    } catch (error) {
        dispatch(actions.getAllHabitsError(error));
    }
};

const addHabit = habit => async dispatch => {
    dispatch(actions.createHabbitRequest());
    try { 
        // console.log(habit);
        const response = await axios.post(
            'http://localhost:5000/api/habits/', { ...habit },
        );
        dispatch(actions.createHabbitSuccess(response.data));
    } catch (error) {
        dispatch(actions.createHabbitError(error.message));
    }
};

const updateHabit = (data, id) => async dispatch => {
    dispatch(actions.updateHabbitRequest());
    try {
        await axios.patch(`http://localhost:5000/api/habits/${id}`, data).then(res => {
            dispatch(actions.updateHabbitSuccess(res.data));
        });
    } catch (error) {
        dispatch(actions.updateHabbitError(error.message));
    }
};

const deleteHabit = id => async dispatch => {
    dispatch(actions.deleteHabbitRequest());
    try {
        await axios.delete(`http://localhost:5000/api/habits/${id}`).then(() => {
            dispatch(actions.deleteHabbitSuccess(id));
        })
    } catch (error) {
        dispatch(actions.deleteHabbitError(error.message))
    }
};


export default {
    getAllHabits,
    addHabit,
    updateHabit,
    deleteHabit,
}