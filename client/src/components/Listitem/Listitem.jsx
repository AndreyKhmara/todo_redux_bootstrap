import React from 'react';
import {
  Button,
  ListGroupItem,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteOneTodo } from '../../redux/actions/todoactions';

export default function Listitem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <ListGroupItem>
        <div>{todo?.title}</div>
        <div>{todo?.text}</div>
        <Button color="danger" onClick={() => dispatch(deleteOneTodo(todo.id))}>Delete</Button>
      </ListGroupItem>

    </div>
  );
}
