import {
  SET_TODO, ADD_TODO, DELETE_TODO,
} from '../types';

export default function todoreducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TODO:
      return payload;
    case ADD_TODO:
      return [payload, ...state];
    case DELETE_TODO:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
}
