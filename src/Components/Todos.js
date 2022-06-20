import React from 'react'
import { Todo } from './Todo';

export const Todos = (props) => {
  return (
    <div className="container">
        <h3 className='text-center'>Todos List</h3>
        {!props.todos.length? 'No Todos Fonud ':
            props.todos.map(e => {
                return <Todo todo={e} key={e.sNo} onDelete={props.onDelete}></Todo>
            })
        }
        
    </div>
  )
}
