import React, { useEffect } from 'react';
import {
  Card, CardHeader, ListGroup,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setAllTodo } from '../../redux/actions/todoactions';
import Listitem from '../Listitem';

export default function MyList() {
  const todos = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllTodo());
  }, []);
  return (
    <div>
      <Card
        style={{
          width: '18rem',
        }}
      >
        <CardHeader>
          All Todo
        </CardHeader>
        <ListGroup>

          {todos.map((el) => <Listitem key={el.id} todo={el} />)}

        </ListGroup>
      </Card>
    </div>
  );
}
