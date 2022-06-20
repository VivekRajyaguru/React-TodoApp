import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Todos } from './Components/Todos';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("Delete Called", todo);
    setTodos(todos.filter(e => e !== todo));
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
  return (
    <>
    <Header title="Todos List" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
