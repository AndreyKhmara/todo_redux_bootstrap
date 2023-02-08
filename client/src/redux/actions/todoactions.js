import axios from 'axios';
import { SET_TODO, ADD_TODO, DELETE_TODO } from '../types';

export const setTodo = (payload) => ({ type: SET_TODO, payload });

export const addTodo = (payload) => ({ type: ADD_TODO, payload });

export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });

export const setAllTodo = () => (dispatch) => {
  axios.get('/todo')
    .then((res) => dispatch(setTodo(res.data)));
};

export const addOneTodo = (input) => (dispatch) => {
  axios.post('/todo/add', input)
  // console.log('input:', input);
    .then((res) => dispatch(addTodo(res.data)));
};

export const deleteOneTodo = (id) => (dispatch) => {
  axios.delete(`/todo/delete/${id}`)
  // console.log('input:', input);
    .then(() => dispatch(deleteTodo(id)));
};
