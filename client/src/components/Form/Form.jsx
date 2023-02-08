import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addOneTodo } from '../../redux/actions/todoactions';

export default function Form() {
  const dispatch = useDispatch();
  const [input, setIsInput] = useState({
    title: '',
    text: '',
  });

  const changeHandler = (e) => {
    setIsInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const clearHandler = () => {
    setIsInput({
      title: '',
      text: '',
    });
  };
  return (
    <div>
      <div>
        <Input name="title" value={input.title} onChange={(e) => changeHandler(e)} placeholder="title" />
        <Input name="text" value={input.text} onChange={(e) => changeHandler(e)} placeholder="text" />
        <Button
          type="button"
          color="primary"
          onClick={() => { dispatch(addOneTodo(input)); clearHandler(); }}
        >
          add Todo

        </Button>
      </div>

    </div>
  );
}
