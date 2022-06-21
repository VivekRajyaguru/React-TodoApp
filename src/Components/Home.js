import React, { useState, useEffect } from 'react';
import { Todos } from './Todos';
import { AddTodo } from './AddTodo';


export const Home = () => {
    const onDelete = (todo) => {
        console.log("Delete Called", todo);
        setTodos(todos.filter(e => e !== todo));
    };
    const addTodo = (title, desc) => {
        console.log(title, desc);
        const sNo = todos.length ? todos[todos.length - 1].sNo + 1 : 1;
        setTodos([...todos, {
            sNo,
            title,
            desc
        }]);
    };
    const [todos, setTodos] = useState([{
    sNo: 1,
    title: 'Item 1',
    desc: 'Item 1 Dec'
    },
    {
    sNo: 2,
    title: 'Item 2',
    desc: 'Item 2 Dec'
    },
    {
    sNo: 3,
    title: 'Item 3',
    desc: 'Item 3 Dec'
    }]);
    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  return (
    <>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete}/>

    </>
  )
}
