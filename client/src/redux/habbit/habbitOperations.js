import axios from 'axios';
import actions from './habbitActions';

axios.defaults.baseURL = 'http://kidslike-v2.top/';

const getAllHabits = childrenId => async dispatch => {
    dispatch(actions.getAllHabitsRequest());
    try {
        const response = await axios.get('/api/habits', childrenId);
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
            '/api/habits', { ...habit },
        );
        dispatch(actions.createHabbitSuccess(response.data));
    } catch (error) {
        dispatch(actions.createHabbitError(error.message));
    }
};

const updateHabit = data => async dispatch => {
    dispatch(actions.updateHabbitRequest());
    try {
        await axios.patch(`/api/habits/${data.id}`, data).then(res => {
            dispatch(actions.updateHabbitSuccess(res.data.updatedHabit));
        });
    } catch (error) {
        dispatch(actions.updateHabbitError(error.message));
    }
};

const deleteHabit = id => async dispatch => {
    dispatch(actions.deleteHabbitRequest());
    try {
        await axios.delete(`/habits/${id}`).then(() => {
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